(() => {
  const CATS = {
    shooting: { label: "Shooting", c: "--shoot", d: "--shoot-d" },
    passing: { label: "Passing", c: "--pass", d: "--pass-d" },
    defending: { label: "Defending", c: "--def", d: "--def-d" },
  };
  const KEY = "my-soccer-drills-v1";
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
  const catState = (cat) => {
    if (!state[cat] || !Array.isArray(state[cat].order) || state[cat].order.length !== DRILLS[cat].length) {
      state[cat] = { order: shuffle(DRILLS[cat].length), opened: {} };
    }
    return state[cat];
  };

  let current = "shooting";

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
      b.innerHTML = `<span>${i}</span>${opened ? "<i>✅</i>" : ""}`;
      b.addEventListener("click", () => openBox(i));
      grid.appendChild(b);
    }
  }

  function openCategory(cat) {
    current = cat;
    setTheme(cat);
    $("#catTitle").textContent = CATS[cat].label;
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
    const drill = DRILLS[current][idx];
    $("#drillBadge").textContent = `Box #${num}`;
    $("#drillCat").textContent = CATS[current].label;
    $("#drillName").textContent = drill.name;
    const ol = $("#drillSteps");
    ol.innerHTML = "";
    drill.steps.forEach((s) => {
      const li = document.createElement("li");
      li.textContent = s;
      ol.appendChild(li);
    });

    if (already) { $("#reveal").hidden = false; return; }

    const op = $("#opening");
    $("#openNum").textContent = num;
    op.classList.remove("pop");
    op.hidden = false;
    // restart shake animation
    const bb = op.querySelector(".big-box");
    bb.style.animation = "none"; void bb.offsetWidth; bb.style.animation = "";
    setTimeout(() => op.classList.add("pop"), 600);
    setTimeout(() => {
      op.hidden = true;
      $("#reveal").hidden = false;
      confetti(40);
      renderGrid();
      updateCounts();
    }, 1000);
  }

  function confetti(n) {
    const box = $("#confetti");
    const colors = ["#ffcc33", "#ffffff", getComputedStyle(document.documentElement).getPropertyValue("--shoot"), "#2f80ff", "#8a4dff", "#12a150"];
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
  document.querySelectorAll(".cat").forEach((b) => b.addEventListener("click", () => openCategory(b.dataset.cat)));
  $("#backHome").addEventListener("click", () => { updateCounts(); show("home"); });
  $("#resetCat").addEventListener("click", () => {
    if (confirm(`Close all ${CATS[current].label} boxes and shuffle new drills inside?`)) {
      state[current] = { order: shuffle(DRILLS[current].length), opened: {} };
      save(); renderGrid(); updateCounts();
    }
  });
  $("#doneBtn").addEventListener("click", () => { $("#reveal").hidden = true; confetti(25); });
  $("#reveal").addEventListener("click", (e) => { if (e.target.id === "reveal") $("#reveal").hidden = true; });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") $("#reveal").hidden = true; });

  updateCounts();
})();
