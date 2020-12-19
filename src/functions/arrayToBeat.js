import {Howl} from 'howler';
import Timer from 'tiny-timer';

export default (arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],type="Kick", tempo=300) =>{
    const timer = new Timer({ interval: tempo, stopwatch: false });
    let sound = new Howl({
        src: [`./sounds/${type}/${type}_1.wav`]
    });
    timer.on('tick', (ms) => {
        sound.play();
        console.log('tick', ms)})
    timer.start(1000);
}