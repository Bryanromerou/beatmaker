import { useState } from 'react';
import './App.css';
import Instrument from './components/Instrument';
import SoundMaker from './components/SoundMaker';
const myArr = [0,0,0,0,0,0,0,0,0,0,0,0]

function App() {
  const [playing, setPlaying] = useState(false);

  const buttonHandler = () =>{
    setPlaying(!playing);
  }

  return (
    <div className="App">
      <Instrument name = "Clap" arr = {myArr}/>
      <Instrument name = "Hi-Hat" arr = {myArr}/>
      <Instrument name = "Snare" arr = {myArr}/>
      <Instrument name = "Alt Snare" arr = {myArr}/>
      <Instrument name = "Alt Snare 2" arr = {myArr}/>
      <Instrument name = "Kick" arr = {myArr}/>
      <SoundMaker/>
      <button className = {playing ? "buttonPlaying":"buttonPaused"} onClick = {buttonHandler}>{playing ? "Playing": "Play"}</button>
    </div>
  );
}

export default App;
