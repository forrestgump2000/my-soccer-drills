// Natural-sounding sound effects, made live with the Web Audio API.
// No beeps: wooden marimba tones, cardboard rustles, a cork pop, air whooshes,
// glockenspiel sparkles and a ball thump, all through a small room reverb.
const Sound = (() => {
  const KEY = "my-soccer-drills-sound";
  let on = true;
  try { on = localStorage.getItem(KEY) !== "off"; } catch {}
  let ctx = null, out = null, verb = null, noiseBuf = null;

  function init() {
    if (ctx) { if (ctx.state === "suspended") ctx.resume(); return true; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    // master with a gentle compressor so nothing gets harsh
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.ratio.value = 4;
    out = ctx.createGain(); out.gain.value = 0.8;
    out.connect(comp); comp.connect(ctx.destination);
    // small-room reverb from a decaying noise impulse
    const len = Math.floor(ctx.sampleRate * 1.4);
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
    }
    verb = ctx.createConvolver(); verb.buffer = ir;
    const wet = ctx.createGain(); wet.gain.value = 0.22;
    verb.connect(wet); wet.connect(out);
    // shared noise buffer
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const n = noiseBuf.getChannelData(0);
    for (let i = 0; i < n.length; i++) n[i] = Math.random() * 2 - 1;
    return true;
  }
  const ready = () => on && init();
  const now = () => ctx.currentTime;

  function send(node, dry = 1, wet = 1) {
    const d = ctx.createGain(); d.gain.value = dry; node.connect(d); d.connect(out);
    const w = ctx.createGain(); w.gain.value = wet; node.connect(w); w.connect(verb);
  }
  function env(g, t, peak, attack, decay) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }
  function noise(t, dur, { type = "bandpass", freq = 1000, q = 1, peak = 0.3, attack = 0.005, freqEnd, wet = 0.6 } = {}) {
    const src = ctx.createBufferSource(); src.buffer = noiseBuf;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(freq, t);
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(freqEnd, t + dur);
    const g = ctx.createGain(); env(g, t, peak, attack, dur);
    src.connect(f); f.connect(g); send(g, 1, wet);
    src.start(t, Math.random()); src.stop(t + attack + dur + 0.05);
  }
  // Marimba: warm sine + the bar's 4x overtone that dies fast + a soft mallet click.
  function marimba(freq, t, vel = 0.35, len = 0.9) {
    const partials = [[1, 1, len], [4, 0.35, len * 0.18], [9.2, 0.08, len * 0.06]];
    partials.forEach(([ratio, amp, dec]) => {
      const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = freq * ratio;
      const g = ctx.createGain(); env(g, t, vel * amp, 0.004, dec);
      o.connect(g); send(g, 1, 0.5);
      o.start(t); o.stop(t + dec + 0.1);
    });
    noise(t, 0.02, { freq: freq * 6, q: 2, peak: vel * 0.25, attack: 0.001, wet: 0.2 });
  }
  // Glockenspiel: inharmonic metal-bar partials, long shimmer.
  function glock(freq, t, vel = 0.12) {
    [[1, 1, 1.4], [2.76, 0.4, 0.6], [5.4, 0.2, 0.25]].forEach(([r, a, d]) => {
      const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = freq * r;
      const g = ctx.createGain(); env(g, t, vel * a, 0.002, d);
      o.connect(g); send(g, 0.8, 1);
      o.start(t); o.stop(t + d + 0.1);
    });
  }
  // Low "thud" body: a quick downward pitch sweep (ball / box landing).
  function thump(t, from = 160, to = 50, vel = 0.6, dur = 0.18) {
    const o = ctx.createOscillator(); o.type = "sine";
    o.frequency.setValueAtTime(from, t); o.frequency.exponentialRampToValueAtTime(to, t + dur);
    const g = ctx.createGain(); env(g, t, vel, 0.003, dur);
    o.connect(g); send(g, 1, 0.3);
    o.start(t); o.stop(t + dur + 0.05);
  }
  const N = (m) => 440 * Math.pow(2, (m - 69) / 12); // midi -> Hz

  return {
    get on() { return on; },
    toggle() {
      on = !on;
      try { localStorage.setItem(KEY, on ? "on" : "off"); } catch {}
      if (on && init()) marimba(N(79), now(), 0.3);
      return on;
    },
    unlock() { if (on) init(); },
    // soft wooden tap for buttons
    tap() { if (!ready()) return; marimba(N(84), now(), 0.22, 0.35); },
    // two-note marimba "select"
    select() { if (!ready()) return; const t = now(); marimba(N(72), t, 0.3, 0.6); marimba(N(79), t + 0.08, 0.3, 0.7); },
    back() { if (!ready()) return; const t = now(); marimba(N(76), t, 0.25, 0.5); marimba(N(69), t + 0.07, 0.25, 0.6); },
    // switch slide for Indoors/Outdoors
    toggleSwitch(right) {
      if (!ready()) return; const t = now();
      noise(t, 0.12, { freq: right ? 900 : 1800, freqEnd: right ? 1800 : 900, q: 1.5, peak: 0.12, wet: 0.3 });
      marimba(N(right ? 79 : 74), t + 0.06, 0.25, 0.5);
    },
    // gift lands on the stage
    land() { if (!ready()) return; const t = now(); thump(t, 120, 55, 0.5, 0.2); noise(t, 0.08, { type: "lowpass", freq: 900, peak: 0.25, wet: 0.4 }); },
    // cardboard box rattle; strength 0..1
    rustle(strength = 0.5) {
      if (!ready()) return; const t = now();
      const grains = 4 + Math.round(strength * 8);
      for (let i = 0; i < grains; i++) {
        const tt = t + i * (0.03 + Math.random() * 0.025);
        noise(tt, 0.03 + Math.random() * 0.03, { freq: 2200 + Math.random() * 2500, q: 2.5, peak: 0.08 + strength * 0.12, wet: 0.3 });
        if (i % 3 === 0) thump(tt, 200, 90, 0.08 + strength * 0.12, 0.06);
      }
    },
    // the big open: cork pop + whoosh + glockenspiel sparkle
    burst() {
      if (!ready()) return; const t = now();
      noise(t, 0.05, { type: "highpass", freq: 1500, peak: 0.5, attack: 0.001, wet: 0.5 });
      thump(t, 420, 90, 0.5, 0.09);
      noise(t + 0.02, 0.45, { freq: 400, freqEnd: 3500, q: 0.8, peak: 0.18, attack: 0.08, wet: 0.7 });
      const notes = [84, 88, 91, 96, 100];
      notes.forEach((m, i) => glock(N(m), t + 0.12 + i * 0.065, 0.1));
    },
    // drill card arrives: little marimba run
    reveal() {
      if (!ready()) return; const t = now();
      [67, 71, 74, 79].forEach((m, i) => marimba(N(m), t + i * 0.09, 0.22, 0.7));
    },
    // "I did it!": ball kick thump + happy marimba + sparkle
    done() {
      if (!ready()) return; const t = now();
      thump(t, 140, 45, 0.7, 0.16);
      noise(t, 0.03, { type: "highpass", freq: 2500, peak: 0.25, attack: 0.001, wet: 0.2 });
      [72, 76, 79, 84].forEach((m, i) => marimba(N(m), t + 0.12 + i * 0.08, 0.28, 0.8));
      glock(N(96), t + 0.5, 0.08); glock(N(100), t + 0.58, 0.07);
    },
    // "Do it again": bouncy two-note restart
    again() {
      if (!ready()) return; const t = now();
      thump(t, 140, 50, 0.5, 0.14);
      marimba(N(79), t + 0.08, 0.26, 0.6); marimba(N(84), t + 0.18, 0.26, 0.7);
    },
    shuffle() {
      if (!ready()) return; const t = now();
      for (let i = 0; i < 6; i++) noise(t + i * 0.06, 0.05, { freq: 3000 - i * 300, q: 2, peak: 0.1, wet: 0.3 });
      marimba(N(72), t + 0.4, 0.25, 0.6);
    },
  };
})();
