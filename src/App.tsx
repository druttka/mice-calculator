import React, { Dispatch, SetStateAction, useState } from "react";
import "./App.css";
import { Gauge } from "./Gauge";
import { Info } from "./Info";

function App() {
  const [view, setView] = useState<"gauge" | "info">("gauge");

  const isGaugeActive = view === "gauge";
  const isInfoActive = view === "info";
  const getButtonClassName = (active: boolean) => {
    return ["App-button", active ? "App-button-active" : ""].join(" ");
  };

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
          <img src={"./logo192.png"} className="App-logo" alt="logo" />
          <h4>MICE Gauge</h4>
        </div>
      </header>

      <div className={"App-main"}>
        {isGaugeActive && <Gauge />}
        {isInfoActive && <Info />}
      </div>

      <div className={"App-buttons"}>
        <button
          className={getButtonClassName(isGaugeActive)}
          onClick={() => setView("gauge")}
        >
          Gauge
        </button>
        <button
          className={getButtonClassName(isInfoActive)}
          onClick={() => setView("info")}
        >
          Info
        </button>
      </div>

      <div className="App-footer">
        <div>
          Created by{" "}
          <a
            href="https://www.davidruttka.com"
            target="_blank"
            rel="noreferrer"
          >
            David Ruttka
          </a>
        </div>
        <div>
          See it on{" "}
          <a
            href="https://www.github.com/druttka/mice-calculator"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
