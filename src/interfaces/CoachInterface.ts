export interface BeatSelectorProps {
    pattern: {
        beats: number;
        steps: string[];
        signature: number

    };
    //"void type may need to be changed"
    displayBeat: (key: number) => void;
}