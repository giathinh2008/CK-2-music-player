let progress = document.getElementById("progress")
let song  = document.getElementById("song")
let playicon = document.getElementById("playicon")

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(playicon.classList.contains("fa-pause")){
        song.pause();
        playicon.classList.remove("fa-pause");
        playicon.classList.add("fa-play");
    }
    else {
        song.play();
        playicon.classList.add("fa-pause");
        playicon.classList.remove("fa-play");
    }
}

if(song.play){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;}
