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

(function(){
var svg=document.querySelector("#top figure svg");if(!svg)return;
var P=[
"Yvonne|41|Kingston, Jamaica|Nurse. Hardworking, passionate, follower of Christ.|Looking for a sunscreen that does not turn her grey.",
"Yusuf|29|Birmingham, England|Electrician. Patient, funny, prays five times a day.|Wants his neck to stop bumping up after a trim.",
"Adaeze|34|Enugu, Nigeria|Pharmacist. Curious, exacting, sings in the choir.|Looking for a lotion that lasts past lunchtime.",
"William|67|Bristol, England|Retired bus driver. Gentle, stubborn, loves his allotment.|Wants to know if that line on his thumbnail is normal.",
"Aisha|23|Nairobi, Kenya|Law student. Ambitious, loyal, fasts in Ramadan.|Growing out her relaxer and learning her curls.",
"Priya|38|Leicester, England|Accountant. Organised, warm, lights a diya every evening.|Tired of being sold fairness creams.",
"Kwame|45|Accra, Ghana|Teacher. Steady, generous, deacon at his church.|Wants his students to love the skin they are in.",
"Fatima|52|Kano, Nigeria|Trader. Shrewd, kind, mother of five.|Looking for something gentle for her daughter's eczema.",
"Delroy|58|Brixton, London|Carpenter. Proud, quiet, Rastafari.|Has worn locs for thirty years and looks after every one.",
"Thandiwe|27|Soweto, South Africa|Software tester. Sharp, playful, loves gospel music.|Wants braids that do not cost her hairline.",
"Margaret|73|Leeds, England|Retired midwife. Practical, witty, chapel on Sundays.|Letting her grey afro grow in at last.",
"Arjun|31|Mumbai, India|Product designer. Thoughtful, restless, not religious.|Wants to understand his dark circles, not hide them.",
"Hodan|36|Minneapolis, USA|Community organiser. Fearless, devout, makes the best tea.|Looking for a foundation that matches under her hijab.",
"Tunde|19|Lagos, Nigeria|Engineering student. Bright, cheeky, football mad.|Wants his first shave not to leave marks.",
"Camila|33|Salvador, Brazil|Dancer. Joyful, disciplined, daughter of Oxum.|Wears her curls big and means it.",
"Harpreet|44|Southall, London|Bus engineer. Dependable, humble, Sikh.|Looks after the hair he has never cut.",
"Selam|30|Addis Ababa, Ethiopia|Architect. Calm, precise, Orthodox Christian.|Looking for a hairdresser who understands her texture.",
"Ibrahim|62|Dakar, Senegal|Tailor. Elegant, patient, a grandfather.|Wants shea butter like his mother used to make.",
"Mei|26|Kuala Lumpur, Malaysia|Illustrator. Quiet, observant, Buddhist.|Wants her melasma explained without a sales pitch.",
"Dorothy|81|Bridgetown, Barbados|Retired teacher. Sharp as ever, Anglican, great-grandmother.|Has moisturised with the same tin for sixty years.",
"Omar|35|Cairo, Egypt|Paramedic. Brave, tired, reads Qur'an before every shift.|Looking for hand cream that survives forty washes a day.",
"Ananya|21|Chennai, India|Medical student. Driven, gentle, visits the temple with her grandmother.|Wants her textbooks to show skin like hers.",
"Marcus|39|Atlanta, USA|Barber. Charming, exacting, Baptist.|Disinfects his clippers between every client.",
"Wanjiru|48|Nakuru, Kenya|Farmer. Tough, laughing, leads her women's group.|Wants a sunscreen she can afford to use daily.",
"Khadija|28|Casablanca, Morocco|Chemist. Meticulous, dry-humoured, observant Muslim.|Reads every ingredient list twice.",
"George|55|Cardiff, Wales|Postman. Cheerful, private, lapsed Methodist.|Wants his son's curls looked after properly.",
"Linh|32|Ho Chi Minh City, Vietnam|Chef. Fast, generous, keeps an ancestor altar.|Looking for a way through her adult acne.",
"Tevita|24|Nuku'alofa, Tonga|Rugby player. Gentle giant, Methodist, sings bass.|Wants to stop getting sunburnt shoulders in silence.",
"Mariam|40|Beirut, Lebanon|Journalist. Tenacious, tender, Maronite.|Wants the truth about the cream her aunt swears by.",
"Sipho|33|Durban, South Africa|Lifeguard. Easy-going, watchful, Zionist church.|Knows his skin can burn too.",
"Imran|47|Bradford, England|Taxi driver. Talkative, generous, goes to Friday prayers.|Looking for something for his daughter's dry scalp.",
"Chidinma|25|Houston, USA|Nurse. Compassionate, loud laugh, Catholic.|Wants to spot rashes on dark skin as fast as on light.",
"Thiago|37|Recife, Brazil|Mechanic. Loyal, stubborn, Sunday footballer.|Finally asking about the bumps on the back of his head.",
"Amara|9|Manchester, England|Year 5. Brave, curious, wants to be an astronaut.|Likes her puffs exactly as they are.",
"Esther|64|Kampala, Uganda|Seamstress. Faithful, firm, born-again.|Wants her granddaughters never to bleach.",
"Rahul|52|Durban, South Africa|Shopkeeper. Careful, kind, Hindu.|Has lived with vitiligo for twenty years and stopped hiding it.",
"Zainab|17|Lagos, Nigeria|Sixth former. Clever, shy, wants to be a dermatologist.|Looking for someone who looks like her in the field.",
"Winston|70|Wolverhampton, England|Retired steelworker. Proud, soft-spoken, Pentecostal.|Came from St Kitts in 1968 and still feels the cold.",
"Nomvula|42|Cape Town, South Africa|Midwife. Steady hands, big heart, Anglican.|Tells every mother that her baby's skin is perfect.",
"Jamal|30|Detroit, USA|Music teacher. Patient, stylish, Muslim.|Wants his beard soft and his neck clear.",
"Sunita|59|Port of Spain, Trinidad|Librarian. Wry, well-read, celebrates Divali and Christmas.|Looking for honest advice on hair dye.",
"Kofi|22|Kumasi, Ghana|Apprentice welder. Hopeful, hard-grafting, sings in church.|Saving up, and wants to buy the right thing once.",
"Layla|35|Amman, Jordan|Paediatrician. Exacting, warm, prays at dawn.|Wants better pictures in the textbooks she teaches from.",
"Grace|46|Harare, Zimbabwe|Bank clerk. Dignified, funny, Seventh-day Adventist.|Learning to love her edges back.",
"Mateo|28|Cartagena, Colombia|Fisherman. Sun-worn, laughing, devoted to his mother.|Wants to keep working outdoors and keep his skin.",
"Nia|31|Cardiff, Wales|Paramedic. Quick, dry, not religious.|Mixed Welsh and Jamaican, and done explaining her hair.",
"Abebe|66|Gondar, Ethiopia|Priest. Serene, learned, up before dawn.|Thinks every shade is a kind of blessing.",
"Shanice|26|Tottenham, London|Hairdresser. Creative, blunt, saved.|Refuses to braid anyone too tight."];
var tip=document.createElement("div");tip.id="mel-tip";tip.setAttribute("role","status");tip.setAttribute("aria-live","polite");tip.hidden=true;document.body.appendChild(tip);
var dots=[].slice.call(svg.querySelectorAll("circle")),cur=null,seen=false;
function show(c,x,y){var i=dots.indexOf(c);if(i<0)return;var p=P[(i*7)%P.length].split("|");
if(cur)cur.removeAttribute("stroke");cur=c;c.setAttribute("stroke","#9AD0A4");c.setAttribute("stroke-width","3");
tip.innerHTML='<span class="sw" style="background:'+c.getAttribute("fill")+'"></span><strong></strong><span class="pl"></span><p></p><p class="lk"></p>';
tip.querySelector("strong").textContent=p[0]+", "+p[1];tip.querySelector(".pl").textContent=p[2];var ps=tip.querySelectorAll("p");ps[0].textContent=p[3];ps[1].textContent=p[4];
tip.hidden=false;var w=tip.offsetWidth,h=tip.offsetHeight,vw=window.innerWidth;
var l=Math.min(Math.max(8,x-w/2),vw-w-8),t=y-h-16;if(t<8)t=y+20;tip.style.left=l+"px";tip.style.top=t+"px";
if(!seen){seen=true;if(window.melTrack)melTrack("heart_profile_view")}}
function hide(){tip.hidden=true;if(cur){cur.removeAttribute("stroke");cur=null}}
svg.style.cursor="pointer";
svg.addEventListener("pointermove",function(e){if(e.target.tagName==="circle"){if(e.target!==cur)show(e.target,e.clientX,e.clientY)}});
svg.addEventListener("pointerleave",function(e){if(e.pointerType==="mouse")hide()});
svg.addEventListener("click",function(e){if(e.target.tagName==="circle"){show(e.target,e.clientX,e.clientY);e.stopPropagation()}});
document.addEventListener("click",function(e){if(!svg.contains(e.target)&&e.target.id!=="mel-meet")hide()});
window.addEventListener("scroll",hide,{passive:true});
var cap=svg.parentNode.querySelector("figcaption");if(cap){cap.textContent="Every dot is a shade someone lives in. Hover over one, or tap it, to meet them. The people are imagined. The shades are real.";
var b=document.createElement("button");b.type="button";b.id="mel-meet";b.textContent="Meet someone";
b.addEventListener("click",function(){var c=dots[Math.floor(Math.random()*dots.length)],r=c.getBoundingClientRect();show(c,r.left+r.width/2,r.top)});cap.parentNode.appendChild(b)}
})();
