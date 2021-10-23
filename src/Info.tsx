import React from "react";

export const Info: React.FC = () => {
  return (
    <div>
      <div className="instructions">
        Story threads which seek to resolve problems on milleu, inquiry,
        character development, or events contribute to the target length of the
        story.
      </div>
      <div className="instructions">
        The more of those these threads we open, the longer the story becomes.
        More characters and more stages (as in where actors stand, not as in phases)
        also necessitate a longer story.
      </div>
      <div className="instructions">
        Use the sliders on the Gauge to adjust how many threads, characters, and
        stages you're considering, and see a rough estimate of a target story
        length.
      </div>
      <div className="instructions">
        The equation is <span className="Info-equation">(C + S) * M / 750</span>
        , where{" "}
        <span className="Info-equation">
          C=Characters, S=Stages, M=MICE threads.
        </span>
      </div>
      
      <div className="instructions">For more, checkout</div>

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
            href="https://www.youtube.com/playlist?list=PLSH_xM-KC3Zv-79sVZTTj-YA6IAqh8qeQ"
            target="_blank"
            rel="noreferrer"
          >
            Brandon Sanderson's BYU lecture series
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
      </ul>
      <div className="instructions Info-disclaimer">
        MICE Gauge has no relationship to Brandon Sanderson, Mary Robinette
        Kowal, or Writing Excuses. Just a fun utility, as I've found the
        equation helpful.
      </div>
    </div>
  );
};
