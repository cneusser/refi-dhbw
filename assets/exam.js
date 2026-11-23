/* Prüfungsbereich: Aufgaben erzeugen, darstellen und bewerten. Gemeinsam genutzt von pruefung.html und pruefung-admin.html. */
var P = window.POOL;
function mul(a){ return function(){ a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function seed(){ return Math.floor(Math.random() * 2147483647); }
function shuffle(arr, r){ arr = arr.slice(); for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
function pick(arr, n, r){ return shuffle(arr, r).slice(0, n); }
function num(s){ if (s == null) return NaN; s = String(s).trim().replace(/\s|€|%/g, ""); if (s.indexOf(",") > -1) s = s.replace(/\./g, "").replace(",", "."); return parseFloat(s); }
function lsGet(k){ try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
function lsSet(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function fmtDate(t){ var d = new Date(t); return d.toLocaleDateString("de-DE") + " " + d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }); }
function mmss(ms){ var neg = ms < 0, t = Math.round(Math.abs(ms) / 1000), m = Math.floor(t / 60), s = t % 60; return (neg ? "+" : "") + m + ":" + (s < 10 ? "0" : "") + s; }
var MODE = { selbst: "Selbsttest", probe: "Probeklausur", klausur: "Klausur" };
function attTitle(a){ return a.title || (MODE[a.mode] + (a.ch ? ": " + P.CH[a.ch].t : "")); }

/* ---------- Aufgaben erzeugen ---------- */
function mcIdx(ch){ return P.MC.map(function(q, i){ return q.ch === ch ? i : -1; }).filter(function(i){ return i >= 0; }); }
function genIdx(ch){ return Object.keys(P.GEN).filter(function(k){ return P.GEN[k].ch === ch; }); }
function txtIdx(ch){ return P.TXT.map(function(q, i){ return q.ch === ch ? i : -1; }).filter(function(i){ return i >= 0; }); }
function itMC(i, r, sec){ return { t: "mc", i: i, p: shuffle([0, 1, 2, 3].slice(0, P.MC[i].o.length), r), sec: sec || "" }; }
function itGen(g, sec){ return { t: "gen", g: g, s: seed(), sec: sec || "" }; }
function itMx(n, r, sec){ return { t: "mx", rows: pick(P.GV.map(function(_, i){ return i; }), n, r), sec: sec || "" }; }
function itBook(sec){ return { t: "book", s: seed(), sec: sec || "" }; }
function itBl(s, l, sec){ return { t: "bl", s: s, l: l, sec: sec || "" }; }
function itTxt(i, sec){ return { t: "txt", i: i, sec: sec || "" }; }
function makeSelbst(ch){
  var r = mul(seed()), items = pick(mcIdx(ch), 12, r).map(function(i){ return itMC(i, r); });
  genIdx(ch).forEach(function(g){ items.push(itGen(g)); });
  if (ch === "r1k2") items.push(itMx(4, r), itMx(4, r));
  if (ch === "r1k3") { var s = seed(); pick([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 8, r).forEach(function(l){ items.push(itBl(s, l)); }); }
  return { mode: "selbst", ch: ch, items: shuffle(items, r), limit: 0 };
}
/* ---------- Klausur zusammenstellen ----------
   Jede Aufgabe hat eine geschätzte Bearbeitungszeit in Minuten. Die Prüfungszeit wird nach Gewicht auf die gewählten Kapitel verteilt
   (normal 1, Schwerpunkt 2). Je Kapitel zieht der Zufallsgenerator aus dem Pool, bis das Zeitbudget gefüllt ist; Multiple Choice nur
   zum Auffüllen und höchstens zwei je Kapitel. Ein Kapitel bekommt höchstens so viel Zeit, dass der Pool mindestens 40 Prozent mehr
   Aufgaben enthält als gezogen werden. */
var EX = window.EX = { CHS: ["r1k1", "r1k2", "r1k3", "r1k4", "r2k1", "r2k2", "r2k3", "r2k4"], RESERVE: 1.4, MC_MAX: 2 };
function txtPts(i){ return P.TXT[i].k.reduce(function(a, k){ return a + k[1]; }, 0); }
EX.cands = function(ch){
  var c = [];
  genIdx(ch).forEach(function(g){ c.push({ k: "gen:" + g, kind: "Rechenaufgabe", min: P.GEN[g].pts * 3, mk: function(){ return [itGen(g)]; } }); });
  txtIdx(ch).forEach(function(i){ c.push({ k: "txt:" + i, kind: "Offene Frage", min: txtPts(i) * 2.5, mk: function(){ return [itTxt(i)]; } }); });
  if (ch === "r1k2") { c.push({ k: "mx8", kind: "Zuordnung", grp: "mx", min: 8, mk: function(r){ return [itMx(8, r)]; } }); c.push({ k: "mx4", kind: "Zuordnung", grp: "mx", min: 4, mk: function(r){ return [itMx(4, r)]; } }); }
  if (ch === "r1k3") { c.push({ k: "bl6", kind: "Buchungssätze", min: 9, mk: function(r){ var s = seed(); return pick([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 6, r).map(function(l){ return itBl(s, l); }); } });
    c.push({ k: "book", kind: "Buchhaltungsfall", min: 45, mk: function(){ return [itBook()]; } }); }
  mcIdx(ch).forEach(function(i){ c.push({ k: "mc:" + i, kind: "Multiple Choice", mc: true, min: 1.5, mk: function(r){ return [itMC(i, r)]; } }); });
  return c;
};
EX.poolMin = function(ch){ var c = EX.cands(ch), g = {}, m = 0, n = 0;
  c.forEach(function(x){ if (x.mc) { if (n < EX.MC_MAX) { m += x.min; n++; } return; } if (x.grp) { g[x.grp] = Math.max(g[x.grp] || 0, x.min); return; } m += x.min; });
  Object.keys(g).forEach(function(k){ m += g[k]; }); return m; };
/* cfg = { w: { r1k1: 0|1|2, ... }, dur: 60|120 } */
EX.plan = function(cfg){
  var W = 0, out = { ch: {}, total: 0, want: cfg.dur, short: [] };
  EX.CHS.forEach(function(c){ W += cfg.w[c] || 0; });
  EX.CHS.forEach(function(c){ var w = cfg.w[c] || 0; if (!w) return; var want = cfg.dur * w / W, cap = EX.poolMin(c) / EX.RESERVE, b = Math.min(want, cap);
    out.ch[c] = { want: want, budget: b, pool: EX.poolMin(c) }; out.total += b; if (cap < want - 0.5) out.short.push(c); });
  return out;
};
EX.title = function(cfg){
  var on = EX.CHS.filter(function(c){ return cfg.w[c]; }), r1 = on.filter(function(c){ return c[1] === "1"; }).length, r2 = on.length - r1;
  var heavy = on.some(function(c){ return cfg.w[c] === 2; });
  var t = r1 === 4 && r2 === 4 ? "ReFi I + II" : r1 === 4 && !r2 ? "ReFi I" : r2 === 4 && !r1 ? "ReFi II" : "Kapitelauswahl";
  return "Klausur " + t + (heavy ? " mit Schwerpunkt" : "") + ", " + cfg.dur + " Minuten";
};
function makeExam(cfg){
  var r = mul(seed()), plan = EX.plan(cfg), items = [], k = 0;
  EX.CHS.forEach(function(ch){ var pc = plan.ch[ch]; if (!pc) return;
    var B = pc.budget, used = 0, grp = {}, mcN = 0, got = [];
    var c = shuffle(EX.cands(ch), r), non = c.filter(function(x){ return !x.mc; }), mc = c.filter(function(x){ return x.mc; });
    non.forEach(function(x){ if (x.grp && grp[x.grp]) return; if (used + x.min <= B + 2) { got.push(x); used += x.min; if (x.grp) grp[x.grp] = 1; } });
    mc.forEach(function(x){ if (mcN < EX.MC_MAX && used + x.min <= B + 1) { got.push(x); used += x.min; mcN++; } });
    if (!got.length) return;
    k++; var sec = "Aufgabe " + k + ": " + P.CH[ch].t;
    shuffle(got, r).forEach(function(x){ x.mk(r).forEach(function(it){ it.sec = sec; it.key = x.k; items.push(it); }); });
  });
  return { mode: "klausur", title: EX.title(cfg), cfg: cfg, items: items, limit: cfg.dur };
}
/* ---------- Aufgaben darstellen und bewerten ---------- */
var CACHE = {};
function genOf(it){ var k = it.g + ":" + it.s; if (!CACHE[k]) CACHE[k] = P.GEN[it.g].make(mul(it.s)); return CACHE[k]; }
function bookOf(s){ var k = "b:" + s; if (!CACHE[k]) CACHE[k] = P.bookCase(mul(s)); return CACHE[k]; }
function meta(it){
  if (it.t === "mc") { var q = P.MC[it.i]; return { ch: q.ch, ref: q.ref, pts: 1 }; }
  if (it.t === "gen") { var g = P.GEN[it.g]; return { ch: g.ch, ref: g.ref, pts: g.pts }; }
  if (it.t === "mx") return { ch: "r1k2", ref: "2.3 Grundbegriffe", pts: it.rows.length * 0.5 };
  if (it.t === "book") return { ch: "r1k3", ref: "3.2 Buchführung", pts: 18 * 1.5 + 6 };
  if (it.t === "bl") return { ch: "r1k3", ref: "3.2 Buchführung", pts: 1 };
  if (it.t === "txt") { var t = P.TXT[it.i]; return { ch: t.ch, ref: t.ref, pts: t.k.reduce(function(a, k){ return a + k[1]; }, 0) }; }
}
function acc(sel, v){ return '<option value="">wählen</option>' + P.KONTEN.map(function(k, i){ return '<option value="' + i + '"' + (String(v) === String(i) ? " selected" : "") + ">" + esc(k) + "</option>"; }).join(""); }
function eurIn(x){ return x == null ? "" : x; }
function balHTML(o){
  var A = [["Grundstücke", o.gr], ["Maschinen und Anlagen", o.ma], ["Roh-, Hilfs- und Betriebsstoffe", o.rhb], ["Fertigerzeugnisse (" + eur(o.feS, 0) + " Stück zu " + eur(o.feW) + " €)", o.fe], ["Forderungen aus Lieferungen und Leistungen", o.fo], ["Bank und Kasse", o.ka]];
  var Pa = [["Eigenkapital", o.ek], ["Verbindlichkeiten gegenüber Kreditinstituten", o.vki], ["Rückstellung für Gewährleistungen", o.rg], ["Rückstellung für Reparaturen", o.rr]];
  function t(h, rows){ var s = rows.reduce(function(a, x){ return a + x[1]; }, 0); return '<table class="tbl"><thead><tr><th>' + h + '</th><th class="r">€</th></tr></thead><tbody>' + rows.map(function(x){ return "<tr><td>" + esc(x[0]) + '</td><td class="r num">' + eur(x[1], 0) + "</td></tr>"; }).join("") + '<tr><td><b>Summe</b></td><td class="r num"><b>' + eur(s, 0) + "</b></td></tr></tbody></table>"; }
  return '<div class="bal"><div>' + t("Aktiva", A) + "</div><div>" + t("Passiva", Pa) + "</div></div>";
}
function render(it, a, done){
  // a: Antwort; done: Lösung anzeigen
  var h = "";
  if (it.t === "mc") { var q = P.MC[it.i];
    h += '<div class="qtext">' + esc(q.q) + "</div>" + it.p.map(function(oi){ var cls = done ? (oi === q.a ? " right" : (a === oi ? " wrong" : "")) : ""; return '<label class="opt' + cls + '"><input type="radio" name="mc" value="' + oi + '"' + (a === oi ? " checked" : "") + (done ? " disabled" : "") + "><span>" + esc(q.o[oi]) + "</span></label>"; }).join("");
  }
  if (it.t === "gen") { var g = genOf(it); a = a || [];
    h += '<div class="qtext">' + esc(g.q) + '</div><div class="fields">' + g.ans.map(function(x, k){ var ok = done && near(num(a[k]), x.v, x.tol); return '<div><label for="g' + k + '">' + esc(x.l) + '</label><input id="g' + k + '" data-k="' + k + '" inputmode="decimal" value="' + esc(a[k] || "") + '"' + (done ? " disabled" : "") + ">" + (done ? '<div class="fb ' + (ok ? "ok" : "bad") + '">' + (ok ? "richtig" : "Lösung: " + eur(x.v, x.tol === 0 ? 0 : 2)) + "</div>" : "") + "</div>"; }).join("") + "</div>";
  }
  if (it.t === "mx") { a = a || [];
    h += '<div class="qtext">Kreuzen Sie an, in welche Kategorien jeder Geschäftsvorfall fällt. Eine Zeile zählt nur, wenn sie vollständig richtig ist (0,5 Punkte je Zeile).</div><div class="tbl"><table class="mx"><thead><tr><th style="writing-mode:horizontal-tb;transform:none;height:auto">Geschäftsvorfall</th>' + P.CATS.map(function(c){ return "<th>" + c + "</th>"; }).join("") + "</tr></thead><tbody>" +
      it.rows.map(function(ri, k){ var g = P.GV[ri], v = a[k] || "00000000"; return "<tr><td>" + esc(g[0]) + "</td>" + P.CATS.map(function(c, j){ var on = v[j] === "1", sol = g[1][j] === "1"; return '<td class="' + (done ? (on === sol ? (sol ? "hit" : "") : "miss") : "") + '"><input type="checkbox" data-r="' + k + '" data-c="' + j + '"' + (on ? " checked" : "") + (done ? " disabled" : "") + ' aria-label="' + c + '">' + (done && sol ? " ✓" : "") + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
  }
  if (it.t === "bl") { var c = bookOf(it.s), L = c.lines[it.l]; a = a || [];
    h += '<div class="qtext">Buchungssatz: ' + esc(L[0]) + " (" + eur(L[1], 0) + " €)" + '</div><div class="fields"><div><label>Soll</label><select data-k="0"' + (done ? " disabled" : "") + ">" + acc(0, a[0]) + '</select></div><div><label>Haben</label><select data-k="1"' + (done ? " disabled" : "") + ">" + acc(1, a[1]) + "</select></div></div>" +
      (done ? '<div class="note ' + (String(a[0]) === String(L[2]) && String(a[1]) === String(L[3]) ? "ok" : "bad") + '">Lösung: ' + esc(P.KONTEN[L[2]]) + " an " + esc(P.KONTEN[L[3]]) + " " + eur(L[1], 0) + " €</div>" : "");
  }
  if (it.t === "book") { var c2 = bookOf(it.s); a = a || {}; var al = a.l || [], ar = a.r || {};
    h += '<div class="qtext">Ein Unternehmen weist zum Vorjahresende folgende Schlussbilanz aus. Fertigerzeugnisse werden nach dem gewogenen Durchschnitt bewertet; Kasse und Bank werden nicht unterschieden. Bilden Sie die Buchungssätze mit Betrag und ermitteln Sie die Kennzahlen des Abschlusses. Je Vorgang 1 Punkt für richtige Konten, 0,5 Punkte für den richtigen Betrag.</div>' + balHTML(c2.o) +
      '<div class="tbl" style="margin-top:12px"><table class="bk"><thead><tr><th>#</th><th>Geschäftsvorfall</th><th style="width:26%">Soll</th><th style="width:26%">Haben</th><th>Betrag €</th></tr></thead><tbody>' +
      c2.lines.map(function(L, k){ var v = al[k] || [], show = [6, 7, 8, 16, 17].indexOf(k) < 0; var okA = done && String(v[0]) === String(L[2]) && String(v[1]) === String(L[3]), okB = done && near(num(v[2]), L[1], 1);
        return "<tr><td>" + (k + 1) + "</td><td>" + esc(L[0]) + (show ? ": " + eur(L[1], 0) + " €" : "") + (done ? '<div class="fb ' + (okA ? "ok" : "bad") + '">' + esc(P.KONTEN[L[2]]) + " an " + esc(P.KONTEN[L[3]]) + " " + eur(L[1], 0) + " €</div>" : "") + '</td><td><select data-l="' + k + '" data-k="0"' + (done ? " disabled" : "") + ">" + acc(0, v[0]) + '</select></td><td><select data-l="' + k + '" data-k="1"' + (done ? " disabled" : "") + ">" + acc(1, v[1]) + '</select></td><td><input data-l="' + k + '" data-k="2" inputmode="decimal" value="' + esc(v[2] || "") + '"' + (done ? " disabled" : "") + ">" + (done ? '<div class="fb ' + (okB ? "ok" : "bad") + '">' + (okB ? "richtig" : eur(L[1], 0)) + "</div>" : "") + "</td></tr>"; }).join("") + "</tbody></table></div>" +
      '<h3>Ergebnisse des Abschlusses</h3><div class="fields">' + [["ju", "Jahresüberschuss in €", 2], ["bs", "Bilanzsumme der Schlussbilanz in €", 2], ["ka", "Bank und Kasse zum Jahresende in €", 1], ["ek", "Eigenkapital zum Jahresende in €", 1]].map(function(x){ var ok = done && near(num(ar[x[0]]), c2.res[x[0]], 1); return '<div><label>' + x[1] + " (" + x[2] + ' P.)</label><input data-r="' + x[0] + '" inputmode="decimal" value="' + esc(ar[x[0]] || "") + '"' + (done ? " disabled" : "") + ">" + (done ? '<div class="fb ' + (ok ? "ok" : "bad") + '">' + (ok ? "richtig" : "Lösung: " + eur(c2.res[x[0]], 0)) + "</div>" : "") + "</div>"; }).join("") + "</div>";
  }
  if (it.t === "txt") { var t = P.TXT[it.i]; a = a || {};
    h += '<div class="qtext">' + esc(t.q) + '</div><textarea data-t="1" rows="7"' + (done ? " disabled" : "") + ' style="width:100%">' + esc(a.text || "") + "</textarea>";
    if (done) h += '<div class="note info" style="margin-top:8px"><b>Musterlösung:</b> ' + esc(t.m) + '</div><p class="small"><b>Bewerten Sie Ihre Antwort selbst:</b> Was davon steht in Ihrem Text?</p>' + t.k.map(function(k, j){ return '<label style="font-weight:400;display:flex;gap:8px;align-items:center"><input type="checkbox" data-self="' + j + '"' + ((a.self || [])[j] ? " checked" : "") + "> " + esc(k[0]) + " (" + k[1] + " P.)</label>"; }).join("");
  }
  return h;
}
function near(x, y, tol){ if (isNaN(x)) return false; return Math.abs(x - y) <= Math.max(tol, tol === 0 ? 0.0001 : 0); }
function grade(it, a){
  var m = meta(it);
  if (it.t === "mc") return a === P.MC[it.i].a ? m.pts : 0;
  if (it.t === "gen") { var g = genOf(it), n = 0; a = a || []; g.ans.forEach(function(x, k){ if (near(num(a[k]), x.v, x.tol)) n++; }); return +(m.pts * n / g.ans.length).toFixed(2); }
  if (it.t === "mx") { a = a || []; return it.rows.reduce(function(s, ri, k){ return s + ((a[k] || "00000000") === P.GV[ri][1] ? 0.5 : 0); }, 0); }
  if (it.t === "bl") { var L = bookOf(it.s).lines[it.l]; a = a || []; return String(a[0]) === String(L[2]) && String(a[1]) === String(L[3]) ? 1 : 0; }
  if (it.t === "book") { var c = bookOf(it.s); a = a || {}; var s = 0;
    c.lines.forEach(function(L, k){ var v = (a.l || [])[k] || []; if (String(v[0]) === String(L[2]) && String(v[1]) === String(L[3])) s += 1; if (near(num(v[2]), L[1], 1)) s += 0.5; });
    [["ju", 2], ["bs", 2], ["ka", 1], ["ek", 1]].forEach(function(x){ if (near(num((a.r || {})[x[0]]), c.res[x[0]], 1)) s += x[1]; }); return s; }
  if (it.t === "txt") { var t = P.TXT[it.i]; a = a || {}; return t.k.reduce(function(s, k, j){ return s + ((a.self || [])[j] ? k[1] : 0); }, 0); }
  return 0;
}
function why(it){
  if (it.t === "mc") return P.MC[it.i].e;
  if (it.t === "gen") return genOf(it).e;
  if (it.t === "mx") return "Auszahlung und Einzahlung: Fluss liquider Mittel. Ausgabe und Einnahme: Änderung des Geldvermögens (liquide Mittel plus Forderungen minus Verbindlichkeiten). Aufwand und Ertrag: Änderung des Reinvermögens. Kosten und Erlös: betrieblicher Werteverzehr und betriebliche Leistung der Periode.";
  if (it.t === "bl" || it.t === "book") return "Aktivkonten nehmen im Soll zu, Passivkonten im Haben. Aufwand steht im Soll, Ertrag im Haben. Bestandsveränderungen im Gesamtkostenverfahren: Zugang Fertigerzeugnisse an Bestandsveränderungen, Abgang umgekehrt.";
  if (it.t === "txt") return "";
}
function answered(it, a){ if (a == null) return false; if (it.t === "mc") return a !== null && a !== undefined;
  function filled(x){ return x !== "" && x != null; }
  if (it.t === "gen") return (a || []).some(filled); if (it.t === "txt") return !!(a.text || "").trim();
  if (it.t === "mx") return (a || []).some(function(v){ return String(v).indexOf("1") > -1; });
  if (it.t === "bl") return filled(a[0]) || filled(a[1]);
  if (it.t === "book") return (a.l || []).some(function(v){ return (v || []).some(filled); }) || Object.keys(a.r || {}).some(function(k){ return filled(a.r[k]); });
  return true; }
