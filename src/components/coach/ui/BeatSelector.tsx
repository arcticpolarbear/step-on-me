import React,{ useState } from 'react'
import { BeatSelectorProps } from '../../../interfaces/coach';
import './styles/BeatSelector.css'

//BeatSelector allows users to select the step to be displayed on StepDisplay.
//"pattern" may contain more parameters than this function actually requires
const BeatSelector:React.FC<BeatSelectorProps> = ({pattern, selectBeat: selectBeat}) => {
    
    //might want to remove this check after a check is implemented in a future "updatePattern()" function
    if (!pattern.beats || !pattern.steps || !pattern.signature) {
        // handleError('BeatSelector did not receive a valid dance pattern!');
        return(<p>'No valid dance pattern!'</p>);
    }

    //generates child "button" elements for the parent element "beat-selector"
    //the first beat of each measure is marked
    //"signature" is the number of beats per measure
    function generateDivisions(beats: number, signature: number) {
        const items = [];
        let firstBeat = 0
        for (let i = 0; i < beats; i++) {
            if (i === firstBeat) {
                //button elements with onClick handler below
                items.push(
                    <button key={`beat-${i}`} className={'beat first'} onClick={() => selectBeat(i)}>
                            Beat {i + 1}
                    </button>);
                //moves firstBeat marker to next measure
                firstBeat += signature;
                continue;
            }
            //button elements with onClick handler handlers below
            items.push(
                <button key={`beat-${i}`} className={'beat'} onClick={() => selectBeat(i)}>
                        Beat {i + 1}
                </button>);
        }
        return items;
    }

    return(
    <div>
        <h1>This is the interactive Beat Selector!</h1>
        <div className="selector-bar">{generateDivisions(pattern.beats, pattern.signature)}</div>
    </div>
    )
}

export default BeatSelector