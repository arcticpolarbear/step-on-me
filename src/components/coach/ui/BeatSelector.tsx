import React from 'react'
import { BeatSelectorProps } from '../../../interfaces/CoachInterface';
import './BeatSelector.css'

//BeatSelector allows users to view steps on a selected beat.
const BeatSelector:React.FC<BeatSelectorProps> = ({pattern, displayBeat}) => {
    //might want to remove this check after a check is implemented in "updatePattern()"
    if (!pattern.beats || !pattern.steps || !pattern.signature) {
        // handleError('BeatSelector did not receive a valid dance pattern!');
        return(<p>'No valid dance pattern!'</p>);
    }
    
    

    //generates child "div" elements for the parent element "beat-selector"
    //the first beat of each measure is marked
    //"signature" is the number of beats per measure
    function generateDivisions(beats: number, signature: number) {
        const items = [];
        let firstBeat = 0
        for (let i = 0; i < beats; i++) {
            if (i === firstBeat) {
                items.push(<button key={i}  className="first-beat" onClick={() => displayBeat(i)}>Beat {i + 1}</button>);
                //moves firstBeat marker to next measure
                firstBeat += signature;
                continue;
            }
            items.push(<button key={i} className="beat-division" onClick={() => displayBeat(i)}>Beat {i + 1}</button>);
        }
        return items;
    }

    return(
    <div>
        <h1>This is the interactive Beat Selector!</h1>
        <div className="beat-selector">{generateDivisions(pattern.beats, pattern.signature)}</div>
    </div>
    )
}

export default BeatSelector