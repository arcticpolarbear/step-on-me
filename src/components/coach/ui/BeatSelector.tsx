import React from 'react'
import { dancePattern } from '../../../datatypes/datatypes';
import './BeatSelector.css'


//BeatSelector allows users to view steps on a selected beat.
function BeatSelector(props: dancePattern) {
    if (!props.beats || !props.steps || !props.signature) {
        // handleError('BeatSelector did not receive a valid dance patern!');
        return(<p>'No valid dance pattern!'</p>);
    }
    
    //generates child "div" elements for the parent element "beat-selector"
    //the first beat of each measure is marked
    function generateDivisions(beats: number, signature: number) {
        const items = [];
        let firstBeat = 0
        for (let i = 0; i < beats; i++) {
            if (i === firstBeat) {
                items.push(<div key={i} className="first-Beat">Beat {i + 1}</div>);
                //moves firstBeat to next firstBeat
                firstBeat += signature;
                continue;
            }
            items.push(<div key={i} className="beat.division">Beat {i + 1}</div>);
        }
        return items;
    }

    return(
    <div>
        <h1>This is the interactive Beat Selector!</h1>
        <div className="beat-selector">{generateDivisions(props.beats, props.signature)}</div>
    </div>
    )
}

export default BeatSelector