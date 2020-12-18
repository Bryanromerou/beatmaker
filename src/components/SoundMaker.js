import React from 'react';
import {Howl} from 'howler';


const SoundMaker = () => {
    let sound = new Howl({
        src: ['./sounds/Clap/Clap_1.wav']
    });
    const buttonHandler = () =>{
        console.log("AH")
        sound.play();
    }

    return (
        <>
            <button onClick={buttonHandler}>oooo press me baby</button>
        </>
    );
}

export default SoundMaker;
