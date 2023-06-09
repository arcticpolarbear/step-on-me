export interface BeatSelectorProps {
    pattern: {
        beats: number;
        steps: string[];
        signature: number

    };
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