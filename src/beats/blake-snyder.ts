import { BeatBreakdown } from "./models";

export const BlakeSnyderBeatSheet: BeatBreakdown = {
    displayName: 'Blake Snyder Beat Sheet (BS2)',
    infoLinkTitle: 'Save the Cat!',
    infoLinkUrl: 'https://www.amazon.com/dp/1932907009',
    beats: [
        { displayName: 'Opening Image', location: { 'type': 'range', startLocationPercentage:0, endLocationPercentage: 1/110}},
        { displayName: 'Set-up', location: { 'type': 'range', startLocationPercentage: 1/110, endLocationPercentage:10/110}},
        { displayName: 'Theme Stated', location: { 'type': 'point', locationPercentage: 5/110}},
        { displayName: 'Catalyst', location: { 'type': 'point', locationPercentage: 12/110}},
        { displayName: 'Debate', location: { 'type': 'range', startLocationPercentage: 12/110, endLocationPercentage:25/110 }},
        { displayName: 'Break Into Two', location: { 'type': 'point', locationPercentage: 25/110}},
        { displayName: 'B Story', location: { 'type': 'point', locationPercentage: 30/110}},
        { displayName: 'Fun and Games', location: { 'type': 'range', startLocationPercentage: 30/110, endLocationPercentage:55/110}},
        { displayName: 'Midpoint', location: { 'type': 'point', locationPercentage: 55/110}},
        { displayName: 'Bad Guys Close In', location: { 'type': 'range', startLocationPercentage: 55/110, endLocationPercentage:75/110}},
        { displayName: 'All is Lost', location: { 'type': 'point', locationPercentage: 75/110}},
        { displayName: 'Dark Night of the Soul', location: { 'type': 'range', startLocationPercentage: 75/110, endLocationPercentage: 85/110}},
        { displayName: 'Break Into Three', location: { 'type': 'point', locationPercentage: 85/110}},
        { displayName: 'Finale', location: { 'type': 'range', startLocationPercentage: 85/110, endLocationPercentage: 110/110}},
        { displayName: 'Final Image', location: { 'type': 'point', locationPercentage: 110/110}},

    ]
}