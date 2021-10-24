import React from "react";

export const Info: React.FC = () => {
  return (
    <div>
      <div className="instructions">
        This tool was inspired by, but is entirely unaffiliated with, the
        following:
      </div>
      
      <ul className="Info-resources">
        <li>
          <a
            href="https://writingexcuses.com/tag/mice-quotient"
            target="_blank"
            rel="noreferrer"
          >
            Writing Excuses
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=blehVIDyuXk"
            target="_blank"
            rel="noreferrer"
          >
            Mary Robinette Kowal's deep dive into MICE
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLSH_xM-KC3Zv-79sVZTTj-YA6IAqh8qeQ"
            target="_blank"
            rel="noreferrer"
          >
            Brandon Sanderson's BYU lecture series
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.com/Save-Last-Book-Screenwriting-Youll/dp/1932907009"
            target="_blank"
            rel="noreferrer"
          >
            Save The Cat! The Last Book on Screenwriting You'll Ever Need{" "}
          </a>
        </li>
      </ul>

      <div className="instructions">
        I've found the MICE Quotient and beat charts very helpful in planning my
        stories, and I feel that having a bespoke calculator for these methods
        saves me a lot of time.
      </div>

      <div className="instructions">
        You can review known issues, report problems, and request enhancements
        at the{" "}
        <a
          href="https://github.com/druttka/mice-calculator/issues"
          target="_blank"
          rel="noreferrer"
        >
          project site on GitHub
        </a>
        . Thanks for using MICE Gauge!
      </div>
    </div>
  );
};
