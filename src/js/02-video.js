import Player from '@vimeo/player';

const LOCAL_WATCHED_VIDEO_KEY = 'videoplayer-current-time';
const currentWatchedTime = localStorage.getItem(LOCAL_WATCHED_VIDEO_KEY);

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

player.on('timeupdate', getWatchedTime);

function getWatchedTime(data) {
  const watchedTime = data.seconds;
  localStorage.setItem(LOCAL_WATCHED_VIDEO_KEY, watchedTime);
}

player
  .setCurrentTime(currentWatchedTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
