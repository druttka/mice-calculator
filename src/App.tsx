import React, { Dispatch, SetStateAction, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface SliderProps {
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
  label: string;
}

const Slider: React.FC<SliderProps> = ({label, setValue, value}) => {
  return <div>
    <label htmlFor={label}>{value} {label}</label>
    <input type="range" min={1} max={10} value={value} onChange={e => setValue(+e.target.value)}></input>
  </div>
}

function App() {
  const [miceThreads, setMiceThreads] = useState(2);
  const [characters, setCharacters] = useState(2);
  const [settings, setSettings] = useState(1);

  const length = (characters+settings)*750*miceThreads / 1.5;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>MICE Calculator</span>
      </header>

      <div className="instructions">
        Story threads which seek to resolve problems on milleu, inquiry, character development, or events contribute to the target length of the story. 
      </div>

      <div className="instructions">
        The more of those these threads we open, the longer the story becomes. More characters and more settings also necessitate a longer story.  
      </div>

      <div className="instructions">
        Use the sliders below to adjust how many threads, characters, and settings you're considering, and see a rough estimate of a target story length.
      </div>

      <Slider label={'MICE Threads'} setValue={setMiceThreads} value={miceThreads} />
      <Slider label={'Characters'} setValue={setCharacters} value={characters} />
      <Slider label={'Settings'} setValue={setSettings} value={settings} />

      <div className="instructions">Your target is {length} words.</div>

      <div className="instructions">
        For more, enjoy this video from Brandon Sanderson's BYU lecture series, featuring Mary Robinette's description of MICE. 
        <iframe className="instructions" width="560" height="315" src="https://www.youtube.com/embed/blehVIDyuXk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default App;
