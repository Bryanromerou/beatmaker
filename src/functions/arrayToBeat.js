import {Howl} from 'howler';
import Timer from 'tiny-timer';

export default (arr=[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],type="Kick", tempo=500) =>{
    // The smaller the number the faster the tempo
    const timer = new Timer({ interval: tempo, stopwatch: false });
    let sound = new Howl({
        src: [`./sounds/${type}/${type}_1.wav`]
    });
    let pos = 0
    timer.on('tick', (ms) => {
        if(arr[pos]==1){
            sound.play();
            console.log('tick', ms)
        }
        pos = pos + 1
        if(pos==arr.length){
            pos = 0
        }
    })
    timer.start(10000);
}