const screenHeader = document.querySelector('.screen-header__icons');
const playBtn = screenHeader.querySelector('.fa-music');
const music = new Audio('music.mp3');

let play = false;

playBtn.addEventListener('click', () => {
  play = !play;
  if (play === false) {
    pauseSound(music);
    playBtn.classList.remove('play-music-now');
  } else {
    playSound(music);
    playBtn.classList.add('play-music-now');
  }
});

function playSound(sound) {
  sound.play();
  sound.currentTime = 0;
}

function pauseSound(sound) {
  sound.pause();
}