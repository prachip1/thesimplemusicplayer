const musicCon = document.getElementById('music-con');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progCon = document.getElementById('progress-con');

const title = document.getElementById('title');

const cover = document.getElementById('cover');

// song titles
const songs = ['music1', 'music2'];

// keep track of songs

let songIndex = 1

//intially load song info DOm

loadSong(songs[songIndex]);

//update song details

function loadSong(song){
    title.innerText = song;
    audio.src =`music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong(){
    console.log("inside the playsong");
    musicCon.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play();
}

function pauseSong(){
    musicCon.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')


    audio.pause();

}

function prevSong(){
    songIndex--

    if(songIndex < 0)
    {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong();
}


function nextSong(){
  songIndex++

  if(songIndex > songs.length-1)
  {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(e){
    const{ duration, currentTime } = e.srcElement

    const progressPercent = (currentTime/duration) * 100
    progress.style.width = `${progressPercent}%` 

    
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width ) * duration

}


//event listners

playBtn.addEventListener('click', () => {
    const isPlaying = musicCon.classList.contains('play');



    if(isPlaying){
        pauseSong();
    }

    else{
        playSong();
    }
}

)


//change song events


prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progCon.addEventListener('click', setProgress)


audio.addEventListener('ended', nextSong)