const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const header=$('.header');
const onScroll=()=>header&&header.classList.toggle('scrolled',scrollY>24); onScroll(); addEventListener('scroll',onScroll,{passive:true});
$('.menu-btn')?.addEventListener('click',()=>header.classList.toggle('open'));
$$('.navlinks a').forEach(a=>a.addEventListener('click',()=>header?.classList.remove('open')));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12}); $$('.reveal').forEach(el=>obs.observe(el));
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{ $$('.filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); const f=btn.dataset.filter; $$('.gallery figure').forEach(fig=>{fig.style.display=(f==='all'||fig.dataset.cat===f)?'block':'none'}); }));
const b=document.querySelector('[data-builder]');
if(b){
 const state={guests:120,season:1,space:0,bar:1,floral:1};
 const fmt=n=>'$'+Math.round(n).toLocaleString();
 function calc(){
  state.guests=+$('#guests').value; state.season=+$('#season').value; state.space=+$('#space').value; state.bar=+$('#bar').value; state.floral=+$('#floral').value;
  const venue=22000+state.space+state.season;
  const catering=state.guests*145;
  const bar=state.guests*(state.bar?68:42);
  const floral=6000+state.floral;
  const planning=4800;
  const total=venue+catering+bar+floral+planning;
  $('#estimate').textContent=fmt(total);
  $('#venueCost').textContent=fmt(venue); $('#cateringCost').textContent=fmt(catering); $('#barCost').textContent=fmt(bar); $('#floralCost').textContent=fmt(floral); $('#planningCost').textContent=fmt(planning);
 }
 ['guests','season','space','bar','floral'].forEach(id=>$('#'+id)?.addEventListener('change',calc)); calc();
 $$('.mood').forEach(m=>m.addEventListener('click',()=>{$$('.mood').forEach(x=>x.classList.remove('active'));m.classList.add('active');$('#moodName').textContent=m.dataset.mood;}));
}
const form=$('#inquiryForm'); if(form)form.addEventListener('submit',e=>{e.preventDefault(); $('#formStatus').textContent='Thank you — your concept inquiry has been captured for this portfolio demo.'; form.reset();});
