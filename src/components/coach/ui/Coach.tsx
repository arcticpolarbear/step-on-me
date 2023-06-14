import { useState } from "react";
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
    const selectBeat = (key: number) => {
        setCurrentBeat(key)
    };

    //set size of PlacementGrid component
    const[canvasSize, setCanvasSize] = useState({width: 400, height: 300})
    const handleResize:() => void = () => {
        //needs to be updated to account for windowsize
        setCanvasSize({width: 400, height: 300})
    }

    //window.addEventListener('resize', handleResize)

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