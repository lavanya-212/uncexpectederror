setInterval(function(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(Math.random()*20+10)+"px";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},8000);

},300);