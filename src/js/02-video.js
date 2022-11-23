import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

setPlayerTime();

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

function setPlayerTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (!currentTime) {
    return;
  }
  player.setCurrentTime(currentTime);
}
