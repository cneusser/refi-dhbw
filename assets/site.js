window.REFI_VERSION='v0.12'; window.REFI_STAND='28.11.2026';
/* Kopf, Navigation und Fuß für alle Seiten */
(function(){
  var NAV=[["index.html","Start"],["vorlesung.html","Vorlesung"],["organizer.html","Advance Organizer"],["live-quiz.html","Live-Quiz"],["challenge.html","Challenge"],["tools.html","Tools"],["pruefung.html","Prüfung"],["glossar.html","Glossar"],["fragen.html","Fragen"],["links.html","Links"]];
  var here=(location.pathname.split("/").pop()||"index.html");
  var h=document.createElement("header"); h.className="site";
  h.innerHTML='<div class="wrap"><a href="index.html" aria-label="Startseite"><img src="assets/dhbw_logo.png" alt="DHBW Duale Hochschule Baden-Württemberg"></a><div class="t"><b>Finanz- und Rechnungswesen</b><span>DHBW Stuttgart · Wirtschaftsingenieurwesen · Kurs TWIE25A · Dr. Christian Neusser</span></div></div>';
  var n=document.createElement("nav"); n.className="main"; n.setAttribute("aria-label","Hauptnavigation");
  n.innerHTML='<div class="wrap">'+NAV.map(function(x){return '<a href="'+x[0]+'"'+(here===x[0]||(here==="live-admin.html"&&x[0]==="live-quiz.html")?' class="on"':'')+'>'+x[1]+'</a>';}).join("")+'</div>';
  document.body.insertBefore(n,document.body.firstChild); document.body.insertBefore(h,document.body.firstChild);
  try{ var on=n.querySelector('.on'); var w=n.firstChild; if(on && w.scrollWidth>w.clientWidth) w.scrollLeft=on.offsetLeft-w.offsetLeft-40; }catch(e){}
  var f=document.createElement("footer"); f.className="site";
  f.innerHTML='<div class="wrap"><span>Modul T3WIW2003 Finanz- und Rechnungswesen · DHBW Stuttgart · Dr. Christian Neusser</span><span>Entwurf · Version '+(window.REFI_VERSION||'')+' · Stand '+(window.REFI_STAND||'')+'</span></div>';
  document.body.appendChild(f);
})();
window.eur=function(v,d){d=(d==null)?2:d;return Number(v).toLocaleString("de-DE",{minimumFractionDigits:d,maximumFractionDigits:d});};
window.esc=function(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});};
/* Firebase-Hilfe: liefert db oder null */
window.getDb=function(){ try{ var c=window.FIREBASE_CONFIG; if(!c||!c.databaseURL||String(c.apiKey).indexOf("HIER_")>-1||!window.firebase) return null; if(!firebase.apps.length) firebase.initializeApp(c); return firebase.database(); }catch(e){ console.error(e); return null; } };
