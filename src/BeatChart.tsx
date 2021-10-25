import React, { ReactNode, useState } from "react";
import { AvailableBeatBreakdowns, Beat } from "./beats";

type LengthType = "Word" | "Page";

const getBeatDescriptionFragment = (
  beat: Beat,
  length: number,
  lengthType: LengthType,
  roundingDirection: "floor" | "ceil" | "round" = "round"
): ReactNode => {
  const { displayName, location } = beat;

  const fmt = (x: number) => {
    switch (roundingDirection) {
      case "ceil":
        return Math.ceil(x);
      case "floor":
        return Math.floor(x);
      case "round":
      default:
        return Math.round(x);
    }
  };

  const start = fmt(
    length *
      (location.type === "point"
        ? location.locationPercentage
        : location.startLocationPercentage)
  );

  const end = fmt(
    length *
      (location.type === "point"
        ? location.locationPercentage
        : location.endLocationPercentage)
  );

  return (
    <tr>
      <td>{displayName}</td>
      <td>{start}</td>
      <td>{end}</td>
    </tr>
  );
};

export const BeatChart: React.FC = () => {
  const [length, setLength] = useState(3000);
  const [countType, setCountType] = useState<LengthType>("Word");

  const [methodIndex, setMethodIndex] = useState(0);
  const selectedMethod = AvailableBeatBreakdowns[methodIndex];

  return (
    <div className="BeatChart-container">
      <h2 className="BeatChart-heading">Beat Chart</h2>


      <div className="BeatChart-options-container">
        <div className="BeatChart-option-container">
          <label htmlFor="beat-chart-breakdown">Beat Chart</label>
          <select
            id="beat-chart-breakdown"
            onChange={(e) => {
              setMethodIndex(e.target.selectedIndex);
            }}
          >
            {
              AvailableBeatBreakdowns.map((b,i) => (
                <option key={`beat-chart-method-${i}`} selected={i===methodIndex} value={b.displayName.replaceAll(' ', '-')}>{b.displayName}</option>
              ))
            }
          </select>
        </div>
      </div>

      {selectedMethod.infoLinkUrl && (
        <h4 className="BeatChart-learn-more">
          Learn more at{" "}
          <a href={selectedMethod.infoLinkUrl} target="_blank" rel="noreferrer">
            {selectedMethod.infoLinkTitle}
          </a>
        </h4>
      )}

      <div className="BeatChart-support">
        Research and support for additional methods is underway! To request
        specific beat breakdowns, visualizations, or other new features check us
        out on{" "}
        <a
          href="https://www.github.com/druttka/mice-calculator"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and consider supporting our efforts from the Info screen.
      </div>

      <div className="BeatChart-options-container">
        <div className="BeatChart-option-container">
          <label htmlFor="beat-chart-length">Length</label>
          <input
            type="number"
            id="beat-chart-length"
            min="1"
            value={length}
            onChange={(e) => {
              const parsed = parseInt(e.target.value);
              setLength(parsed);
            }}
          ></input>
        </div>
        <div className="BeatChart-option-container">
          <label htmlFor="beat-chart-type">Length Type</label>
          <select
            id="beat-chart-type"
            onChange={(e) => {
              setCountType(e.target.value as any);
            }}
          >
            <option selected={countType === "Word"} value="Word">
              Words
            </option>
            <option selected={countType === "Page"} value="Page">
              Pages
            </option>
          </select>
        </div>
      </div>

      <div className="BeatChart-separator"></div>

      <table className="BeatChart-beat-list">
        <tr>
          <th>Beat Name</th>
          <th>Start {countType}</th>
          <th>End {countType}</th>
        </tr>
        {!!length &&
          selectedMethod.beats.map((beat, beatIndex) => {
            const roundingDirection =
              beatIndex === 0
                ? "floor"
                : beatIndex === selectedMethod.beats.length - 1
                ? "ceil"
                : "round";

            return getBeatDescriptionFragment(
              beat,
              length,
              countType,
              roundingDirection
            );
          })}
      </table>
    </div>
  );
};
