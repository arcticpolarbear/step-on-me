import React,{ useState } from 'react'
import { StepDisplayProps } from '../../../interfaces/coach-interfaces';
import './styles/StepDisplay.css'

//StepDisplay displays current step selected by BeatSelector
//Interface 'StepDisplayProps' may need to be updated in the future
const StepDisplay:React.FC<StepDisplayProps> = ({currentBeat, selectBeat: selectBeat}) => {
    return (
        <div>{currentBeat}</div>
    )
} 

export default StepDisplay