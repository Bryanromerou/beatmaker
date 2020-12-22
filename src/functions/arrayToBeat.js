import {Howl} from 'howler';
import Timer from 'tiny-timer';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async(arr=[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],type="Kick", tempo=500) =>{
 
    let sound = new Howl({
        src: [`./sounds/${type}/${type}_1.wav`]
    });

    for(let i = 0; i< arr.length;i++){
        await sleep(tempo);
        sound.play();
    }
 
}