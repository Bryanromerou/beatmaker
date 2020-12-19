import React from 'react';
import {Howl} from 'howler';
import arrayToBeat from '../functions/arrayToBeat';


const SoundMaker = () => {
    let sound = new Howl({
        src: ['./sounds/Clap/Clap_1.wav']
    });
    const buttonHandler = () =>{
        arrayToBeat();
    }

    return (
        <>
            <button onClick={buttonHandler}>oooo press me baby</button>
        </>
    );
}

export default SoundMaker;
