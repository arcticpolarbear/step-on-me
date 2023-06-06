import { dancePattern } from "../../../datatypes/datatypes";
import BeatSelector from "./BeatSelector"

let tempPattern: dancePattern = {
    beats: 4,
    steps: ['a'],
    signature: 4
}

function CoachWindow() {
    return(
        <div>
            {/* temporary values passed as prop */}
            <BeatSelector {...tempPattern}/>
        </div>
    );
}

export default CoachWindow