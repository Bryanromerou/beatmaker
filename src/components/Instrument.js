import React, { useEffect, useState } from 'react';
import Square from './Square';

const Instrument = (props) => {
    const [arr, setArr] = useState(props.arr);
    const [squares, setSquares] = useState([]);

    useEffect(()=>{
        const arrSquares = arr.map((elem,i)=>{
            if (elem === 0){
                return <Square isOn = {false} index = {i} key={i} instrument={props.name}/>
            }else{
                return <Square isOn = {true} index = {i} key={i} instrument={props.name}/>
            }
        })
        setSquares(arrSquares);
    },[])


    return (
        <div className={`instrument ${props.name}`}>
            {props.name}
            {squares}
        </div>
    );
}

export default Instrument;
