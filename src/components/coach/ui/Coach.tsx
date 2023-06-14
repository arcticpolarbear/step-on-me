import { useState } from "react";
import { BeatSelectorProps } from "../../../interfaces/coach-interfaces";
import PlacementGrid from "./PlacementGrid";
import BeatSelector from "./BeatSelector"
import StepDisplay from "./StepDisplay"

function Coach() {
    //temporary while no patterns can be organically generated
    let tempPattern = {
        beats: 9,
        steps: ['a'],
        signature: 4
    }

    //displays steps for current selected beat
    const [currentBeat, setCurrentBeat] = useState(0);

    //set size of PlacementGrid component
    const[canvasSize, setCanvasSize] = useState({width: 400, height: 300})


    const selectBeat = (key: number) => {
        setCurrentBeat(key)
    };

    return(
        <div>
            {/* temporary values passed as prop */}
            <PlacementGrid width={canvasSize.width} height={canvasSize.height}/>
            <BeatSelector pattern={tempPattern} selectBeat={selectBeat}/>
            <StepDisplay currentBeat={currentBeat} selectBeat={selectBeat}/>
        </div>
    );
}

export default Coach