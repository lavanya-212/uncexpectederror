let music;

window.onload = function(){

music = document.getElementById("bgMusic");

let savedTime = localStorage.getItem("musicTime");

if(savedTime){
    music.currentTime = savedTime;
}

music.play().catch(()=>{});

setInterval(function(){
    localStorage.setItem(
        "musicTime",
        music.currentTime
    );
},1000);

}