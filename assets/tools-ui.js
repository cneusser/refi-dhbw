/* Tool-Seiten: Navigation bleibt oben sichtbar, Tools sind eingeklappt und öffnen per Klick. */
(function(){
  var navs = document.querySelectorAll(".toolnav"); if (!navs.length) return;
  var first = navs[0], start = first.previousElementSibling && first.previousElementSibling.classList.contains("blk") ? first.previousElementSibling : first;
  var bar = document.createElement("div"); bar.className = "toolbar";
  start.parentNode.insertBefore(bar, start);
  var n = start, last = navs[navs.length - 1];
  while (n) { var nx = n.nextElementSibling; bar.appendChild(n); if (n === last) break; n = nx; }
  var tools = Array.prototype.slice.call(document.querySelectorAll("section.tool"));
  var hint = document.createElement("p"); hint.className = "small muted toolhint"; hint.textContent = "Wählen Sie oben ein Tool. Es öffnet sich hier; die Leiste bleibt beim Scrollen sichtbar.";
  bar.parentNode.insertBefore(hint, bar.nextSibling);
  var links = bar.querySelectorAll("a[href^='#']");
  function show(id){
    var ok = false;
    tools.forEach(function(s){ var on = s.id === id; s.hidden = !on; if (on) ok = true; });
    links.forEach(function(a){ a.classList.toggle("on", a.getAttribute("href") === "#" + id); });
    hint.hidden = ok;
    if (ok) { window.dispatchEvent(new Event("resize")); var s = document.getElementById(id); s.querySelectorAll("input").forEach(function(i){ i.dispatchEvent(new Event("input", { bubbles: true })); }); }
    return ok;
  }
  links.forEach(function(a){ a.addEventListener("click", function(e){ e.preventDefault(); var id = a.getAttribute("href").slice(1);
    if (a.classList.contains("on")) { tools.forEach(function(s){ s.hidden = true; }); a.classList.remove("on"); hint.hidden = false; history.replaceState(null, "", location.pathname + location.search); return; }
    show(id); history.replaceState(null, "", "#" + id); var y = bar.getBoundingClientRect().bottom + window.scrollY - bar.offsetHeight; window.scrollTo({ top: Math.max(0, y - 8), behavior: "smooth" }); }); });
  if (!show(location.hash.slice(1))) tools.forEach(function(s){ s.hidden = true; });
  window.addEventListener("hashchange", function(){ show(location.hash.slice(1)); });
})();
