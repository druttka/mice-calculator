import React, { Dispatch, SetStateAction, useState } from 'react';

interface SliderProps {
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
  label: string;
}

const Slider: React.FC<SliderProps> = ({ label, setValue, value }) => {
  return (
    <div className="Slider-container">
      <label className="Slider-label" htmlFor={label}>
        {value} {label}
      </label>
      <input
        id={label.toLocaleLowerCase().replaceAll(' ', '-')}
        className="Slider-input"
        type="range"
        min={1}
        max={10}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      ></input>
    </div>
  );
};

export const Gauge: React.FC = () => {
  const [miceThreads, setMiceThreads] = useState(2);
  const [characters, setCharacters] = useState(2);
  const [settings, setSettings] = useState(1);

  const length = ((characters + settings) * 750 * miceThreads) / 1.5;

  return (
    <div>
      <Slider
        label={"MICE"}
        setValue={setMiceThreads}
        value={miceThreads}
      />
      <Slider
        label={"Characters"}
        setValue={setCharacters}
        value={characters}
      />
      <Slider label={"Settings"} setValue={setSettings} value={settings} />

      <div className="Gauge-result">Your target is {length} words.</div>

    </div>
  );
};
