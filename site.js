(function(){
/* Analytics: Google Analytics 4 with consent. Nothing personal is sent; form contents never go to analytics. */
var GA="G-2D8TDM0TTS";
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;
var ok=null;try{ok=localStorage.getItem("mel_consent")}catch(e){}
gtag("consent","default",{analytics_storage:ok==="1"?"granted":"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
gtag("js",new Date());gtag("config",GA);
var gs=document.createElement("script");gs.async=true;gs.src="https://www.googletagmanager.com/gtag/js?id="+GA;document.head.appendChild(gs);
window.melTrack=function(n,p){try{gtag("event",n,p||{})}catch(e){}};
if(ok===null){var b=document.createElement("div");b.id="mel-ck";b.setAttribute("role","region");b.setAttribute("aria-label","Cookies");
b.innerHTML='<p>We would like to count visits with Google Analytics so we know which guides are useful. No adverts. <a href="/privacy">Privacy notice</a>.</p><div><button type="button" data-c="1">Allow</button><button type="button" data-c="0">No thanks</button></div>';
b.addEventListener("click",function(ev){var c=ev.target.getAttribute&&ev.target.getAttribute("data-c");if(c===null)return;try{localStorage.setItem("mel_consent",c)}catch(e){}
if(c==="1"){gtag("consent","update",{analytics_storage:"granted"});melTrack("consent_granted")}b.remove()});
document.body.appendChild(b)}
document.addEventListener("click",function(ev){var t=ev.target.closest&&ev.target.closest("a[href*='amazon.co.uk']");if(t)melTrack("amazon_click",{link_url:t.href,page_path:location.pathname})});
var ENDPOINT="https://formsubmit.co/ajax/fb22f0b890a08d7382639123bc2b5703";/* FormSubmit relays each sign-up by email; the alias hides the inbox address */
var preview=/[?&]signup=preview/.test(location.search);
var seen=false;try{seen=!!localStorage.getItem("mel_signup")}catch(e){}
function open(topic){if(document.getElementById("mel-dlg"))return;
var d=document.createElement("dialog");d.id="mel-dlg";d.setAttribute("aria-labelledby","mel-h");
d.innerHTML='<form method="dialog" style="margin:0"><button class="mel-x" value="close" aria-label="Close">×</button></form>'+
(topic?'<h2 id="mel-h">Tell us what you want</h2><p>We are researching <strong></strong>. Tell us what you would want from it, and we will send you what we learn. Unsubscribe any time.</p>':'<h2 id="mel-h">Stay in the loop</h2><p>Routines, product breakdowns, advice and offers from melan.in, plus help finding a dermatologist. Unsubscribe any time.</p>')+
'<form id="mel-f" novalidate><label>Name<input name="name" autocomplete="name" required></label>'+
'<label>Email<input name="email" type="email" autocomplete="email" required></label>'+
'<label>Phone <span class="mel-o">optional</span><input name="phone" type="tel" autocomplete="tel"></label>'+
'<label>Anything you would like to ask? <span class="mel-o">optional</span><textarea name="enquiry" rows="3"></textarea></label>'+
'<input name="_honey" tabindex="-1" autocomplete="off" style="display:none">'+
'<label class="mel-c"><input type="checkbox" name="consent" required><span>Yes, email me news and offers from melan.in. See our <a href="/privacy">privacy notice</a>.</span></label>'+
'<p id="mel-m" role="status" aria-live="polite"></p><button type="submit" class="mel-b">Sign me up</button></form>';
document.body.appendChild(d);melTrack("signup_open",{topic:topic||"timed pop-up",page_path:location.pathname});if(topic){d.querySelector("p strong").textContent=topic}
function done(){try{localStorage.setItem("mel_signup","1")}catch(e){}}
d.addEventListener("close",function(){done();d.remove()});
d.querySelector("#mel-f").addEventListener("submit",function(e){e.preventDefault();var f=e.target,m=d.querySelector("#mel-m");
if(!f.name.value.trim()||!/^\S+@\S+\.\S+$/.test(f.email.value)){m.textContent="Add your name and a valid email address.";return}
if(!f.consent.checked){m.textContent="Tick the box so we know you want to hear from us.";return}
if(!ENDPOINT){m.textContent="Preview only: sign-up is not connected yet, so nothing was sent.";return}
m.textContent="Sending…";
fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify({_subject:"melan.in sign-up: "+f.name.value,_template:"table",_captcha:"false",_honey:f._honey.value,name:f.name.value,email:f.email.value,phone:f.phone.value||"not given",enquiry:f.enquiry.value||"none",interest:topic||"general sign-up",consent:"Yes, ticked on "+new Date().toISOString(),page:location.href})})
.then(function(r){if(!r.ok)throw 0;melTrack("generate_lead",{topic:topic||"general sign-up",page_path:location.pathname,gave_phone:f.phone.value?"yes":"no",asked_question:f.enquiry.value?"yes":"no"});f.innerHTML="<p><strong>Thank you.</strong> You are on the list.</p>";done()})
.catch(function(){m.textContent="That did not send. Please try again in a moment."})});
if(d.showModal)d.showModal();else d.setAttribute("open","")}
document.addEventListener("click",function(ev){var t=ev.target.closest&&ev.target.closest("[data-signup]");if(t){ev.preventDefault();open(t.getAttribute("data-signup"))}});
if(preview)setTimeout(function(){open()},600);else if(ENDPOINT&&!seen)setTimeout(function(){open()},15000)})();
