import { BeatSelectorProps } from "../../../interfaces/CoachInterface";
import BeatSelector from "./BeatSelector"

function CoachInterface() {
    //temporary while no patterns can be organically generated
    let tempPattern = {
        beats: 9,
        steps: ['a'],
        signature: 4
    }

    //displays steps for current selected beat
    function displayBeat(key: number) {
        //temporarily logs key to console instead of actually doing something useful
       console.log('key/index for this beat: ' + key)
    }

    return(
        <div>
            {/* temporary values passed as prop */}
            <BeatSelector pattern={tempPattern} displayBeat={displayBeat}/>
        </div>
    );
}

export default CoachInterface