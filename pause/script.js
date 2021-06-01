var sound = document.getElementById('sound');
var playPauseBTN  = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
    if(count==0){
        count = 1;
        sound.play();
        playPauseBTN.innerHTML = "pause"
    }else{
        count= 0;
        sound.pause();
        playPauseBTN.innerHTML = "pause"
    }
}

function stop(){
    playPause()
    audio.pause();
    audio.CurrentTime = 0;
}

