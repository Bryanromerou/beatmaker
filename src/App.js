import { useState } from 'react';
import './App.css';
import Instrument from './components/Instrument';
import SoundMaker from './components/SoundMaker';
import arrayToBeat from './functions/arrayToBeat';
const myArr = [0,0,0,0,0,0,0,0,0,0,0,0]

function App() {
  const [clap, setClap] = useState(myArr);
  const [hiHat, setHiHat] = useState(myArr);
  const [snare, setSnare] = useState(myArr);
  const [altSnare, setAltSnare] = useState(myArr);
  const [altSnare2, setAltSnare2] = useState(myArr);
  const [kick, setKick] = useState(myArr);
  const [playing, setPlaying] = useState(false);
  const legend = {
    "Clap":setClap,
    "Hi-Hat":setHiHat,
    "Snare":setSnare,
    "Alt Snare":setAltSnare,
    "Alt Snare 2":setAltSnare2,
    "Kick":setKick,
  }

  const changeValue = (instrument, position)=>{
    
  }

  const buttonHandler = () =>{
    setPlaying(!playing);
  }

  return (
    <div className="App">
      <div className="allInstruments">

        <Instrument name = "Clap" arr = {clap}/>
        <Instrument name = "Hi-Hat" arr = {hiHat}/>
        <Instrument name = "Snare" arr = {snare}/>
        <Instrument name = "Alt Snare" arr = {altSnare}/>
        <Instrument name = "Alt Snare 2" arr = {altSnare2}/>
        <Instrument name = "Kick" arr = {kick}/>
        <SoundMaker/>
        <button className = {playing ? "buttonPlaying":"buttonPaused"} onClick = {buttonHandler}>{playing ? "Playing": "Play"}</button>

      </div>
    </div>
  );
}

export default App;
