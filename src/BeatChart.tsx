import { count } from "console";
import React, { ReactNode, useState } from "react";
import { AvailableBeatBreakdowns, Beat, BeatLocation } from "./beats";

export interface BeatChartProps {
  length: number;
  countType?: "Word" | "Page";
}

const getBeatDescriptionFragment = (
  beat: Beat,
  length: number,
  countType: BeatChartProps["countType"],
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
      (location.type === "point" ? location.locationPercentage : location.endLocationPercentage)
  );

  return (
    <tr>
      <td>{displayName}</td>
      <td>{start}</td>
      <td>{end}</td>
    </tr>
  );
};

export const BeatChart: React.FC<BeatChartProps> = ({
  length,
  countType = "Word",
}) => {
  const [methodIndex] = useState(0);
  const selectedMethod = AvailableBeatBreakdowns[methodIndex];

  return (
    <div className="BeatChart-container">
      <h2 className="BeatChart-heading">Beat Chart</h2>
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
      <h3 className="BeatChart-method-name">
        Using {selectedMethod.displayName}
      </h3>
      {selectedMethod.infoLinkUrl && (
        <h4 className="BeatChart-learn-more">
          Learn more at{" "}
          <a href={selectedMethod.infoLinkUrl} target="_blank" rel="noreferrer">
            {selectedMethod.infoLinkTitle}
          </a>
        </h4>
      )}

      <table className="BeatChart-beat-list">
        <tr>
          <th>Beat Name</th>
          <th>Start {countType}</th>
          <th>End {countType}</th>
        </tr>
        {selectedMethod.beats.map((beat, beatIndex) => {
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
