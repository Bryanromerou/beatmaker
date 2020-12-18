import './App.css';
import Instrument from './components/Instrument';
import SoundMaker from './components/SoundMaker';
const myArr = [0,0,0,0,0,0,0,0,0,0,0,0]

function App() {
  return (
    <div className="App">
      <Instrument name = "Clap" arr = {myArr}/>
      <Instrument name = "Hi-Hat" arr = {myArr}/>
      <Instrument name = "Snare" arr = {myArr}/>
      <Instrument name = "Alt Snare" arr = {myArr}/>
      <Instrument name = "Alt Snare 2" arr = {myArr}/>
      <Instrument name = "Kick" arr = {myArr}/>
      <SoundMaker/>
    </div>
  );
}

export default App;
