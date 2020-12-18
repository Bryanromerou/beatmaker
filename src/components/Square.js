import React, { useEffect, useState } from 'react';
import {Howl} from 'howler';


const legend = {
    "Clap":"Clap",
    "Hi-Hat":"Hi-Hat",
    "Snare":"Snare",
    "Alt Snare":"Alt_Snare",
    "Alt Snare 2":"Alt_Snare_2",
    "Kick":"Kick",
}

const Square = (props) => {
    const [isOn, setIsOn] = useState(props.isOn);
    const [className, setClassName] = useState(props.isOn ? "boxOn": "boxOff");
    let sound = new Howl({
        src: [`./sounds/${legend[props.instrument]}/${legend[props.instrument]}_1.wav`]
    });

    const clickHandler = () =>{
        console.log("clicked");
        setIsOn(!isOn);
        sound.play();
    }
    useEffect(()=>{
        setClassName(isOn ? "boxOn": "boxOff")
        // console.log(legend[props.instrument])
    },[isOn])

    return (
        <div className={className} onClick={clickHandler}>
        </div>
    );
}

export default Square;
