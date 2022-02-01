import {toggleAnimation, stopAnimation, updateTime, updateSongLength, audio} from './controls.js';
import{songs} from './songs.js';
import{createPlaylist} from './playlist.js'



createPlaylist(songs)

audio.addEventListener('play', (ev)=>{
    // console.log(audio.currentTime)
    toggleAnimation()
    updateSongLength()
})

audio.addEventListener('pause',stopAnimation);

audio.addEventListener('durationchange',updateSongLength);

audio.addEventListener('timeupdate',updateTime);





