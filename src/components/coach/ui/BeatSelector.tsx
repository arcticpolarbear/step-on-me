import React from 'react'
import { dancePattern } from '../../../datatypes/datatypes';


//BeatSelector allows users to view steps on a selected beat.
function BeatSelector(props: dancePattern) {
    if (!props.beats || !props.steps || !props.signature) {
        // handleError('BeatSelector did not receive a valid dance patern!');
        return(<p>'No valid dance pattern!'</p>);
    }
    return(
    <div>
        <h1>This is the interactive Beat Selector!</h1>
        <div id = 'beat-selector'></div>
    </div>
    )
}

export default BeatSelector