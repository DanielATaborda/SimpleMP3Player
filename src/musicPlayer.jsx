

    const title = document.getElementById("artist-song"),
artist = document.getElementById("artist-name"),
currentTimeEl = document.getElementById("currentTime"),
durationEl = document.getElementById("duration"),
progress = document.getElementById("progress"),
playerProgress = document.getElementById("progressPlayer"),
playPauseBtn = document.getElementById("playPause"),
skipBtn = document.getElementById("skip"),
previousBtn = document.getElementById("previous"),
volume = document.getElementById("volumeRange"),
controlVolumeIcon = document.getElementById("controlVolume");

controlVolumeIcon.addEventListener("click",()=>{
    volume.classList.toggle("active");
})


const music = new Audio();

const songs = [
    {
        path:"src/assets/1.mp3",
        displayName:"All Eyez On Me",
        artist:"2pac",
    },
    {
        path:"src/assets/2.mp3",
        displayName:"Nothin But A G Thang",
        artist:"Dr.Dre",
    },
    {
        path:"src/assets/3.mp3",
        displayName:"Fu-Gee-La",
        artist:"Fugees",
    },
]

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;

    playPauseBtn.setAttribute("title","pause");
    music.play();
}


function pauseMusic(){
    isPlaying = false;

    playPauseBtn.setAttribute("title","play");
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const {duration,currentTime} = music;
    const progressPercent = (currentTime / duration) *100;
    progress.style.width = `${progressPercent}%`;
    const formatTime = (time) => String(Math.floor(time)).padStart(2,"0");
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration%60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime%60)}`;
}

function setProgressBar(e){
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width ) * music.duration;
}

function setVolume(){
    const volumeRange = volume.value;
    music.volume = volumeRange;
}

playPauseBtn.addEventListener("click",togglePlay);
previousBtn.addEventListener("click",()=>changeMusic(-1));
skipBtn.addEventListener("click",()=>changeMusic(1));
music.addEventListener("ended",()=>changeMusic(1));
music.addEventListener("timeupdate",updateProgressBar);
playerProgress.addEventListener("click",setProgressBar);
volume.addEventListener("input",setVolume);

loadMusic(songs[musicIndex]);