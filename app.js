(() => {
  const CATS = {
    shooting: { label: "Shooting", c: "--shoot", d: "--shoot-d" },
    passing: { label: "Passing", c: "--pass", d: "--pass-d" },
    defending: { label: "Defending", c: "--def", d: "--def-d" },
  };
  const KEY = "my-soccer-drills-v3";
  const PLACE_KEY = "my-soccer-drills-place";
  const $ = (s) => document.querySelector(s);

  // state[cat] = { order: [shuffled drill indexes], opened: { boxNum: drillIndex } }
  let state = {};
  try { state = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { state = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {} };

  const shuffle = (n) => {
    const a = [...Array(n).keys()];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  // Each place + category has its own 30 boxes.
  let place = "indoor";
  try { if (localStorage.getItem(PLACE_KEY) === "outdoor") place = "outdoor"; } catch {}
  const deck = (cat) => DRILLS[place][cat];
  const catState = (cat) => {
    const k = `${place}:${cat}`;
    if (!state[k] || !Array.isArray(state[k].order) || state[k].order.length !== deck(cat).length) {
      state[k] = { order: shuffle(deck(cat).length), opened: {}, done: {} };
    }
    if (!state[k].done) state[k].done = {};
    return state[k];
  };

  let current = "shooting";

  const PLACES = {
    indoor: { label: "🏠 Indoors", note: "Use a soft ball and clear some space." },
    outdoor: { label: "🌳 Outdoors", note: "Grab a ball and head to a yard, park, or field." },
  };
  function setPlace(p) {
    place = p;
    try { localStorage.setItem(PLACE_KEY, p); } catch {}
    $(".seg").dataset.place = p;
    document.querySelectorAll(".seg-btn").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.place === p)));
    $("#placeNote").textContent = PLACES[p].note;
    updateCounts();
  }
  let currentBox = 1;

  function timesText(n) {
    return n === 0 ? "Not done yet" : n === 1 ? "✅ Done 1 time" : `✅ Done ${n} times`;
  }
  function markDone() {
    const st = catState(current);
    st.done[currentBox] = (st.done[currentBox] || 0) + 1;
    save();
    $("#drillTimes").textContent = timesText(st.done[currentBox]);
    renderGrid();
  }
  function replaySteps() {
    document.querySelectorAll("#drillSteps li").forEach((li) => {
      li.style.animation = "none"; void li.offsetWidth; li.style.animation = "";
    });
    $("#reveal .card").scrollTop = 0;
  }

  function setTheme(cat) {
    const root = document.documentElement.style;
    root.setProperty("--cat", `var(${CATS[cat].c})`);
    root.setProperty("--cat-d", `var(${CATS[cat].d})`);
  }

  function updateCounts() {
    for (const cat in CATS) {
      const n = Object.keys(catState(cat).opened).length;
      document.querySelector(`[data-count="${cat}"]`).textContent = `${n} / 30 opened`;
    }
  }

  function show(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("active", s.id === id));
    window.scrollTo(0, 0);
  }

  function renderGrid() {
    const st = catState(current);
    const grid = $("#grid");
    grid.innerHTML = "";
    for (let i = 1; i <= 30; i++) {
      const b = document.createElement("button");
      const opened = st.opened[i] !== undefined;
      b.className = "box" + (opened ? " opened" : "");
      b.style.animationDelay = `${i * 15}ms`;
      b.setAttribute("aria-label", `Box ${i}${opened ? " (opened)" : ""}`);
      const times = st.done[i] || 0;
      b.innerHTML =
        `<svg viewBox="0 0 100 100" aria-hidden="true"><use href="#${opened ? "gift-open" : "gift"}"/></svg>` +
        `<span class="num">${i}</span>` +
        (opened && times ? `<i class="count">×${times}</i>` : "");
      b.addEventListener("click", () => openBox(i));
      grid.appendChild(b);
    }
  }

  function openCategory(cat) {
    current = cat;
    setTheme(cat);
    $("#catTitle").textContent = CATS[cat].label;
    $("#placeTag").textContent = PLACES[place].label;
    $("#placeTag").classList.toggle("out", place === "outdoor");
    renderGrid();
    show("boxes");
  }

  function openBox(num) {
    const st = catState(current);
    let idx = st.opened[num];
    const already = idx !== undefined;
    if (!already) {
      // Random drill: take the next unused drill from this category's shuffled deck.
      const used = new Set(Object.values(st.opened));
      const free = st.order.filter((d) => !used.has(d));
      idx = free[Math.floor(Math.random() * free.length)];
      st.opened[num] = idx;
      save();
    }
    const drill = deck(current)[idx];
    currentBox = num;
    $("#drillBadge").textContent = `Box #${num}`;
    $("#drillPlace").textContent = PLACES[place].label;
    $("#drillPlace").classList.toggle("out", place === "outdoor");
    $("#drillTimes").textContent = timesText(st.done[num] || 0);
    $("#drillCat").textContent = CATS[current].label;
    $("#drillName").textContent = drill.name;
    const ol = $("#drillSteps");
    ol.innerHTML = "";
    drill.steps.forEach((s) => {
      const li = document.createElement("li");
      li.textContent = s;
      ol.appendChild(li);
    });

    if (already) { Sound.reveal(); $("#reveal").hidden = false; return; }

    playOpening(num);
  }

  // ---- Opening scene: drop in → shake & charge → burst → card ----
  let timers = [];
  function finishOpening() {
    timers.forEach(clearTimeout); timers = [];
    const op = $("#opening");
    if (op.hidden) return;
    op.hidden = true;
    op.className = "overlay opening";
    $("#reveal").hidden = false;
    Sound.reveal();
    confetti(40);
    renderGrid();
    updateCounts();
  }
  function burstParticles() {
    const parts = $("#parts");
    parts.innerHTML = "";
    const colors = ["#ffcc33", "#ffffff", "#ffe27a", getComputedStyle(document.documentElement).getPropertyValue("--cat").trim() || "#ff5a36"];
    const n = 26;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("i");
      const ang = (i / n) * Math.PI * 2 + Math.random() * 0.3;
      const dist = 110 + Math.random() * 90;
      const star = i % 3 === 0;
      if (star) p.className = "star";
      p.style.setProperty("--dx", `${Math.cos(ang) * dist}px`);
      p.style.setProperty("--dy", `${Math.sin(ang) * dist}px`);
      p.style.setProperty("--rot", `${(Math.random() - 0.5) * 540}deg`);
      p.style.setProperty("--s", `${star ? 18 + Math.random() * 10 : 8 + Math.random() * 6}px`);
      p.style.setProperty("--r", Math.random() < 0.5 ? "50%" : "3px");
      p.style.setProperty("--c", colors[i % colors.length]);
      parts.appendChild(p);
    }
  }
  function playOpening(num) {
    const op = $("#opening");
    const label = $("#openLabel");
    $("#openNum").textContent = num;
    label.textContent = `Box #${num}…`;
    label.classList.remove("pop");
    $("#parts").innerHTML = "";
    op.className = "overlay opening";
    op.hidden = false;
    // restart drop-in animation
    const stage = op.querySelector(".stage");
    stage.style.animation = "none"; void stage.offsetWidth; stage.style.animation = "";

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { finishOpening(); return; }

    Sound.land();
    [[450, 0.3], [750, 0.6], [1000, 1]].forEach(([ms, k]) => timers.push(setTimeout(() => Sound.rustle(k), ms)));
    requestAnimationFrame(() => op.classList.add("charging"));
    timers.push(setTimeout(() => {
      op.classList.remove("charging");
      op.classList.add("charging-done", "burst");
      burstParticles();
      Sound.burst();
      label.textContent = "⚽ Here's your drill!";
      void label.offsetWidth; label.classList.add("pop");
    }, 1250));
    timers.push(setTimeout(finishOpening, 2050));
  }

  // Idle wiggle: a random closed box shakes now and then to tease you.
  setInterval(() => {
    if (!$("#boxes").classList.contains("active") || !$("#opening").hidden || !$("#reveal").hidden) return;
    const closed = [...document.querySelectorAll(".box:not(.opened)")];
    if (!closed.length) return;
    const b = closed[Math.floor(Math.random() * closed.length)];
    b.classList.add("wiggle");
    setTimeout(() => b.classList.remove("wiggle"), 950);
  }, 1800);

  function confetti(n) {
    const box = $("#confetti");
    const colors = ["#ffcc33", "#ff5a36", "#2f80ff", "#8a4dff", "#12a150"];
    for (let i = 0; i < n; i++) {
      const p = document.createElement("i");
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = 1.4 + Math.random() * 1.4 + "s";
      p.style.animationDelay = Math.random() * 0.3 + "s";
      box.appendChild(p);
      setTimeout(() => p.remove(), 3200);
    }
  }

  // Events
  document.querySelectorAll(".seg-btn").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.place !== place) Sound.toggleSwitch(b.dataset.place === "outdoor");
    setPlace(b.dataset.place);
  }));
  document.querySelectorAll(".cat").forEach((b) => b.addEventListener("click", () => { Sound.select(); openCategory(b.dataset.cat); }));
  $("#backHome").addEventListener("click", () => { Sound.back(); updateCounts(); show("home"); });
  $("#resetCat").addEventListener("click", () => {
    if (confirm(`Close all ${PLACES[place].label.slice(3)} ${CATS[current].label} boxes and shuffle new drills inside?`)) {
      state[`${place}:${current}`] = { order: shuffle(deck(current).length), opened: {}, done: {} };
      save(); renderGrid(); updateCounts(); Sound.shuffle();
    }
  });
  $("#doneBtn").addEventListener("click", () => { Sound.done(); markDone(); $("#reveal").hidden = true; confetti(25); });
  $("#againBtn").addEventListener("click", () => { Sound.again(); markDone(); replaySteps(); confetti(15); });
  $("#opening").addEventListener("click", finishOpening);
  $("#reveal").addEventListener("click", (e) => { if (e.target.id === "reveal") { Sound.tap(); $("#reveal").hidden = true; } });

  // Sound on/off (browsers only allow audio after the first tap)
  const soundBtn = $("#soundBtn");
  const paintSound = () => {
    soundBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/>${Sound.on ? '<path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/>' : '<path d="M16 9.5l5 5M21 9.5l-5 5"/>'}</svg>`;
    soundBtn.classList.toggle("off", !Sound.on);
    soundBtn.setAttribute("aria-label", Sound.on ? "Sound on" : "Sound off");
  };
  soundBtn.addEventListener("click", () => { Sound.toggle(); paintSound(); });
  paintSound();
  document.addEventListener("pointerdown", () => Sound.unlock(), { once: true });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") $("#reveal").hidden = true; });

  setPlace(place);
})();
