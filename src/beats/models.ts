export type BeatLocationType = 'point' | 'range';
export type BeatLocation = | { type: 'point', locationPercentage: number } | {type:'range', startLocationPercentage: number, endLocationPercentage: number; } 

export interface Beat {
 displayName: string;
 description?: string;
 location: BeatLocation;   
}

export interface BeatBreakdown {
    displayName: string;
    infoLinkTitle?: string;
    infoLinkUrl?: string;
    beats: Beat[];
}