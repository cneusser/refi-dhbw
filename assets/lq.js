/* Live-Quiz: gemeinsame Helfer für Spielleitung, Teilnahme und Üben allein */
(function(){
  var LQ = window.LQ = {};
  /* Einstellungen der Spielleitung (je Browser): Antwortzeit in Sekunden, automatisch weiter nach n Sekunden (0 = von Hand), eigene Fragen einbeziehen */
  LQ.DEF = { dur: 25, adv: 0, extra: true };
  LQ.settings = function(){ var s = {}; try{ s = JSON.parse(localStorage.getItem("lq_settings") || "{}") || {}; }catch(e){} var o = {}; Object.keys(LQ.DEF).forEach(function(k){ o[k] = (s[k] === undefined ? LQ.DEF[k] : s[k]); }); return o; };
  LQ.saveSettings = function(s){ try{ localStorage.setItem("lq_settings", JSON.stringify(s)); }catch(e){} };
  /* Serverzeit: Handy-Uhren gehen oft vor oder nach; gerechnet wird mit der Uhr der Datenbank */
  LQ.offset = 0;
  LQ.now = function(){ return Date.now() + LQ.offset; };
  LQ.watchOffset = function(db){ try{ db.ref(".info/serverTimeOffset").on("value", function(s){ LQ.offset = s.val() || 0; }); }catch(e){} };
  LQ.valid = function(q){ return !!q && typeof q.q === "string" && q.q.trim() && Array.isArray(q.o) && q.o.length >= 2 && q.o.length <= 4 && q.o.every(function(x){ return typeof x === "string" && x.trim(); }) && typeof q.a === "number" && q.a >= 0 && q.a < q.o.length; };
  /* Eigene Fragen der Spielleitung: refi/quizCustom/<set>/<id> = {q, o[2..4], a, e, on, at} */
  LQ.loadCustom = function(db, set, all){
    if (!db) return Promise.resolve([]);
    var p = db.ref("refi/quizCustom/" + set).once("value").then(function(s){ var v = s.val() || {};
      return Object.keys(v).sort().map(function(k){ var x = v[k] || {}; return { id: k, q: x.q, o: x.o, a: x.a, e: x.e || "", on: x.on !== false, at: x.at || 0 }; })
        .filter(function(x){ return LQ.valid(x) && (all || x.on); }); }).catch(function(){ return []; });
    return LQ.timeout(p, 4000, []);
  };
  LQ.timeout = function(p, ms, fallback){ return Promise.race([p, new Promise(function(r){ setTimeout(function(){ r(fallback); }, ms); })]); };
  LQ.points = function(correct, timeMs, durMs){ if (!correct) return 0; var f = Math.max(0, Math.min(1, (durMs - timeMs) / durMs)); return Math.max(300, Math.round(300 + 700 * f)); };
  /* Antworten mischen: In den Quellfragen steht die richtige Antwort oft an zweiter Stelle (Raute).
     Gemischt wird je Raum mit demselben Startwert, damit Beamer und alle Handys dieselbe Reihenfolge zeigen. */
  LQ.mix = function(qs, key){
    function h(s){ var x = 2166136261; for (var i = 0; i < s.length; i++){ x ^= s.charCodeAt(i); x = Math.imul(x, 16777619); } return x >>> 0; }
    return qs.map(function(q, n){ var st = h(String(key) + ":" + n + ":" + q.q), p = q.o.map(function(_, i){ return i; });
      for (var i = p.length - 1; i > 0; i--){ st = Math.imul(st ^ (st >>> 15), 2246822519) >>> 0; var j = st % (i + 1); var t = p[i]; p[i] = p[j]; p[j] = t; }
      return { q: q.q, o: p.map(function(i){ return q.o[i]; }), a: p.indexOf(q.a), e: q.e }; });
  };
  LQ.questions = function(set, extra){ var b = (window.QSETS[set] || window.QSETS.pkr).qs; return b.concat((extra || []).filter(LQ.valid)); };
})();
