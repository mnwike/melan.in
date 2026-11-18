(function(){
var ENDPOINT="https://formsubmit.co/ajax/fb22f0b890a08d7382639123bc2b5703";/* FormSubmit relays each sign-up by email; the alias hides the inbox address */
var preview=/[?&]signup=preview/.test(location.search);
if(!ENDPOINT&&!preview)return;
try{if(!preview&&localStorage.getItem("mel_signup"))return}catch(e){}
function open(){if(document.getElementById("mel-dlg"))return;
var d=document.createElement("dialog");d.id="mel-dlg";d.setAttribute("aria-labelledby","mel-h");
d.innerHTML='<form method="dialog" style="margin:0"><button class="mel-x" value="close" aria-label="Close">×</button></form>'+
'<h2 id="mel-h">Stay in the loop</h2><p>Routines, product breakdowns, advice and offers from melan.in, plus help finding a dermatologist. Unsubscribe any time.</p>'+
'<form id="mel-f" novalidate><label>Name<input name="name" autocomplete="name" required></label>'+
'<label>Email<input name="email" type="email" autocomplete="email" required></label>'+
'<label>Phone <span class="mel-o">optional</span><input name="phone" type="tel" autocomplete="tel"></label>'+
'<label>Anything you would like to ask? <span class="mel-o">optional</span><textarea name="enquiry" rows="3"></textarea></label>'+
'<input name="_honey" tabindex="-1" autocomplete="off" style="display:none">'+
'<label class="mel-c"><input type="checkbox" name="consent" required><span>Yes, email me news and offers from melan.in. See our <a href="/privacy">privacy notice</a>.</span></label>'+
'<p id="mel-m" role="status" aria-live="polite"></p><button type="submit" class="mel-b">Sign me up</button></form>';
document.body.appendChild(d);
function done(){try{localStorage.setItem("mel_signup","1")}catch(e){}}
d.addEventListener("close",done);
d.querySelector("#mel-f").addEventListener("submit",function(e){e.preventDefault();var f=e.target,m=d.querySelector("#mel-m");
if(!f.name.value.trim()||!/^\S+@\S+\.\S+$/.test(f.email.value)){m.textContent="Add your name and a valid email address.";return}
if(!f.consent.checked){m.textContent="Tick the box so we know you want to hear from us.";return}
if(!ENDPOINT){m.textContent="Preview only: sign-up is not connected yet, so nothing was sent.";return}
m.textContent="Sending…";
fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify({_subject:"melan.in sign-up: "+f.name.value,_template:"table",_captcha:"false",_honey:f._honey.value,name:f.name.value,email:f.email.value,phone:f.phone.value||"not given",enquiry:f.enquiry.value||"none",consent:"Yes, ticked on "+new Date().toISOString(),page:location.href})})
.then(function(r){if(!r.ok)throw 0;f.innerHTML="<p><strong>Thank you.</strong> You are on the list.</p>";done()})
.catch(function(){m.textContent="That did not send. Please try again in a moment."})});
if(d.showModal)d.showModal();else d.setAttribute("open","")}
setTimeout(open,preview?600:15000)})();
