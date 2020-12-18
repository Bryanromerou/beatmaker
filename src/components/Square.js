import React, { useEffect, useState } from 'react';

const Square = (props) => {
    const [isOn, setIsOn] = useState(props.isOn);
    const [className, setClassName] = useState(props.isOn ? "boxOn": "boxOff");
    const clickHandler = () =>{
        console.log("clicked");
        console.log(isOn);
        setIsOn(!isOn);
    }
    useEffect(()=>{
        setClassName(isOn ? "boxOn": "boxOff")
        // console.log(props.isOn)
    },[isOn])

    return (
        <div className={className} onClick={clickHandler}>
        </div>
    );
}

export default Square;
