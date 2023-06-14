export interface DancePattern {
    beats: number;
    signature: number;
    steps: {};
}

export interface BeatSelectorProps {
    pattern: DancePattern
    selectBeat: (key: number) => void;
}

export interface StepDisplayProps {
    // pattern: {
    //     beats: number;
    //     steps: string[];
    //     signature: number

    // };
    currentBeat: number;
    selectBeat: (key: number) => void;
}

export interface PlacementGridProps {
    width: number;
    height: number
}