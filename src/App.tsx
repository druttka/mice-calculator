import React, { Dispatch, SetStateAction, useState } from 'react';
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
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={'./logo192.png'} className="App-logo" alt="logo" />
            <h4>MICE Gauge</h4>
          </div>
      </header>

      <div className={'App-main'}>
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

        {/* <div className="instructions">
          <div>For more, enjoy this video from Brandon Sanderson's BYU lecture series, featuring Mary Robinette Kowal's description of MICE.</div> 
          <iframe className="instructions" width="560" height="315" src="https://www.youtube.com/embed/blehVIDyuXk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div> */}
      </div>

      <div className={'App-buttons'}>
        <div className="App-button">Gauge</div>
        <div className="App-button">Info</div>
      </div>
      <div className="App-footer">
         <div>
            Created by <a href="https://www.davidruttka.com" target="_blank" rel="noreferrer">David Ruttka</a>
          </div>
        <div>
            View it on <a href="https://www.github.com/druttka/mice-calculator" target="_blank" rel="noreferrer">GitHub</a>
          </div>
      </div>
    </div>
  );
}

export default App;
