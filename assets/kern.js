/* Rechenkern und SVG-Diagramme Nordstil (identisch mit challenge.html) */
var D=window.NORDSTIL, M=D.meta;
/* ---------- Rechenkern ---------- */
function chain(o){
  o=o||{}; var rq=o.rq==null?0.65:o.rq; var fv0=2.86, fr0=1.86;
  var fv = Math.abs(rq-0.65)<1e-9?fv0:1/(1-rq), fr = Math.abs(rq-0.65)<1e-9?fr0:rq/(1-rq);
  var parts=[], cls={W:0,N:0,B:0,V:0}, prop=0, leer=0;
  D.depts.forEach(function(d){ var c=0;
    d.acts.forEach(function(a){ var f=a.f; if(f===fv0) f=fv; else if(f===fr0) f=fr; var v=d.rate*a.t*f; if(o.noV&&a.cls==="V") v=0; if(o.halfB&&a.cls==="B") v/=2; c+=v; cls[a.cls]+=v; });
    var p = (o.prop && o.prop[d.id]!=null) ? o.prop[d.id] : d.prop;
    if(o.override && o.override[d.id]!=null) c = o.override[d.id];
    parts.push({id:d.id,name:d.name,v:c}); prop+=c*p; leer+=d.leer; });
  var porto=M.porto_hin*fv+M.porto_rueck*fr; var proc=parts.reduce(function(s,p){return s+p.v;},0);
  return {parts:parts,porto:porto,cls:cls,total:M.we+porto+proc,proc:proc,grenz:M.we+porto+prop,propProc:prop,leer:leer};
}
function zuschlag(){ return M.we*(1+M.zuschlag_alt); }

/* ---------- SVG-Diagramme ---------- */
function hbar(items,o){
  o=o||{}; var W=820, L=o.L||330, R=90, bh=o.bh||22, gap=8, n=items.length;
  var max=o.max||Math.max.apply(null,items.map(function(i){return i.v;}).concat((o.lines||[]).map(function(l){return l.v;})))*1.3||1;
  var H=n*(bh+gap)+(o.lines?40:10); var sx=(W-L-R)/max;
  var s='<svg viewBox="0 0 '+W+' '+H+'" width="100%" style="min-width:560px" role="img" aria-label="'+esc(o.aria||"Balkendiagramm")+'">';
  items.forEach(function(it,i){ var y=4+i*(bh+gap); s+='<text x="'+(L-8)+'" y="'+(y+bh*0.7)+'" text-anchor="end" font-size="12">'+esc(it.l)+'</text>';
    if(it.stack){ var x0=L; it.stack.forEach(function(st){ var w=Math.max(0,st.v*sx); s+='<rect x="'+x0+'" y="'+y+'" width="'+w+'" height="'+bh+'" fill="'+st.c+'"><title>'+esc(st.n+": "+eur(st.v))+'</title></rect>'; x0+=w; }); s+='<text x="'+(x0+6)+'" y="'+(y+bh*0.7)+'" font-size="12" class="num">'+(o.fmt?o.fmt(it.v):eur(it.v))+'</text>'; }
    else { s+='<rect x="'+L+'" y="'+y+'" width="'+Math.max(1,it.v*sx)+'" height="'+bh+'" fill="'+(it.c||"#5D6971")+'"></rect><text x="'+(L+it.v*sx+6)+'" y="'+(y+bh*0.7)+'" font-size="12" class="num">'+(o.fmt?o.fmt(it.v):eur(it.v))+(it.note?'  '+esc(it.note):'')+'</text>'; } });
  (o.lines||[]).forEach(function(l,k){ var x=L+l.v*sx; s+='<line x1="'+x+'" x2="'+x+'" y1="0" y2="'+(n*(bh+gap))+'" stroke="'+(l.c||"#5D6971")+'" stroke-dasharray="4 3"></line><text x="'+x+'" y="'+(n*(bh+gap)+14+(k%2)*13)+'" font-size="11" text-anchor="middle">'+esc(l.t)+'</text>'; });
  return s+'</svg>';
}
function waterfall(steps,o){
  o=o||{}; var W=760,H=300,L=40,B=60,T=16; var tot=steps.reduce(function(s,x){return s+x.v;},0); var max=Math.max(tot,(o.lines||[]).reduce(function(m,l){return Math.max(m,l.v);},0))*1.08;
  var n=steps.length+1, bw=(W-L-20)/n*0.7, step=(W-L-20)/n, sy=(H-B-T)/max; var s='<svg viewBox="0 0 '+W+' '+H+'" width="100%" style="min-width:560px" role="img" aria-label="Wasserfall Kosten je verkauftem Kleid">';
  var cum=0; steps.forEach(function(st,i){ var x=L+i*step+(step-bw)/2, y=H-B-(cum+st.v)*sy; s+='<rect x="'+x+'" y="'+y+'" width="'+bw+'" height="'+Math.max(1,st.v*sy)+'" fill="'+(st.c||"#5D6971")+'" opacity="'+(st.pending?0.35:1)+'"></rect><text x="'+(x+bw/2)+'" y="'+(y-4)+'" font-size="11" text-anchor="middle" class="num">'+eur(st.v)+'</text><text x="'+(x+bw/2)+'" y="'+(H-B+14)+'" font-size="10.5" text-anchor="middle">'+esc(st.s)+'</text>'+(st.pending?'<text x="'+(x+bw/2)+'" y="'+(H-B+27)+'" font-size="10" text-anchor="middle" fill="#B3001A">ausstehend</text>':''); cum+=st.v; });
  var x=L+steps.length*step+(step-bw)/2; s+='<rect x="'+x+'" y="'+(H-B-cum*sy)+'" width="'+bw+'" height="'+cum*sy+'" fill="#E2001A"></rect><text x="'+(x+bw/2)+'" y="'+(H-B-cum*sy-4)+'" font-size="12" font-weight="700" text-anchor="middle">'+eur(cum)+'</text><text x="'+(x+bw/2)+'" y="'+(H-B+14)+'" font-size="10.5" text-anchor="middle" font-weight="700">Summe</text>';
  (o.lines||[]).forEach(function(l,k){ var y=H-B-l.v*sy; s+='<line x1="'+L+'" x2="'+(W-10)+'" y1="'+y+'" y2="'+y+'" stroke="#2B3439" stroke-dasharray="5 4"></line><text x="'+(L+4)+'" y="'+(y-4)+'" font-size="11">'+esc(l.t)+'</text>'; });
  return s+'</svg>';
}

