import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_WATCHED_VIDEO_KEY = 'videoplayer-current-time';
const currentWatchedTime = localStorage.getItem(LOCAL_WATCHED_VIDEO_KEY);

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

player.on('timeupdate', throttle(getWatchedTime, 1000));

function getWatchedTime(data) {
  const watchedTime = data.seconds;
  localStorage.setItem(LOCAL_WATCHED_VIDEO_KEY, watchedTime);
}

player.setCurrentTime(currentWatchedTime).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      console.log(error.name);
      break;

    default:
      // some other error occurred
      console.log(error.name);
      break;
  }
});
