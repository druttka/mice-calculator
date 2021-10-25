import { BeatBreakdown } from "./models";

export const HeroesJourney17BeatSheet: BeatBreakdown = {
    displayName: "Joseph Campbell's 17-Stage Monomyth",
    infoLinkTitle: 'The Hero with a Thousand Faces ',
    infoLinkUrl: 'https://www.amazon.com/Thousand-Faces-Collected-Joseph-Campbell/dp/1577315936',
    beats: [
      {
        displayName: "Call to Adventure",
        location: {
          type: "range",
          startLocationPercentage: 0,
          endLocationPercentage: 0.05,
        },
      },
      {
        displayName: "Refusal of the Call",
        location: {
          type: "range",
          startLocationPercentage: 0.05,
          endLocationPercentage: 0.10,
        },
      },
      {
        displayName: "Supernatural Aid",
        location: {
          type: "range",
          startLocationPercentage: 0.10,
          endLocationPercentage: 0.15,
        },
      },
      {
        displayName: "Crossing the Threshold",
        location: {
          type: "range",
          startLocationPercentage: 0.15,
          endLocationPercentage: 0.20,
        },
      },
      {
        displayName: "Belly of the Whale",
        location: {
          type: "range",
          startLocationPercentage: 0.20,
          endLocationPercentage: 0.25,
        },
      },
      {
        displayName: "Road of Trials",
        location: {
          type: "range",
          startLocationPercentage: 0.25,
          endLocationPercentage: 0.25 + (.0833 * 1),
        },
      },
      {
        displayName: "Meeting with the Goddess",
        location: {
          type: "range",
          startLocationPercentage: 0.25 + (.0833 * 1),
          endLocationPercentage: 0.25 + (.0833 * 2),
        },
      },
      {
        displayName: "Woman as Temptress",
        location: {
          type: "range",
          startLocationPercentage: 0.25 + (.0833 * 2),
          endLocationPercentage: 0.25 + (.0833 * 3),
        },
      },
      {
        displayName: "Atonement with the Father/Abyss",
        location: {
          type: "range",
          startLocationPercentage: 0.25 + (.0833 * 3),
          endLocationPercentage: 0.25 + (.0833 * 4),
        },
      },
      {
        displayName: "Apotheosis",
        location: {
          type: "range",
          startLocationPercentage: 0.25 + (.0833 * 4),
          endLocationPercentage: 0.25 + (.0833 * 5),
        },
      },
      {
        displayName: "The Ultimate Boon",
        location: {
          type: "range",
          startLocationPercentage: 0.25 + (.0833 * 5),
          endLocationPercentage: 0.75,
        },
      },
      {
        displayName: "Refusal of the Return",
        location: {
          type: "range",
          startLocationPercentage: 0.75,
          endLocationPercentage: 0.75 + (.0833 * 1),
        },
      },
      {
        displayName: "The Magic Flight",
        location: {
          type: "range",
          startLocationPercentage:  0.75 + (.0833 * 1),
          endLocationPercentage:  0.75 + (.0833 * 2),
        },
      },
      {
        displayName: "Rescue from Without",
        location: {
          type: "range",
          startLocationPercentage:  0.75 + (.0833 * 2),
          endLocationPercentage:  0.75 + (.0833 * 3),
        },
      },
      {
        displayName: "The Crossing of the Return Threshold",
        location: {
          type: "range",
          startLocationPercentage:  0.75 + (.0833 * 3),
          endLocationPercentage:  0.75 + (.0833 * 4),
        },
      },
      {
        displayName: " Master of the Two Worlds",
        location: {
          type: "range",
          startLocationPercentage:  0.75 + (.0833 * 4),
          endLocationPercentage:  0.75 + (.0833 * 5),
        },
      },
      {
        displayName: "Freedom to Live",
        location: {
          type: "range",
          startLocationPercentage:  0.75 + (.0833 * 5),
          endLocationPercentage: 1,
        },
      },
    ],
  };