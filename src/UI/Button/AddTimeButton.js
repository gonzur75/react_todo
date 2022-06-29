import {FaClock} from "react-icons/fa";
import {flipAddTimeForm} from "../../views/Operations/Operation";

export function AddTimeButton({setAddTimeFormState, setAddTimeDivState}) {

    function handleClick(e) {
        e.preventDefault()
        flipAddTimeForm(setAddTimeFormState, setAddTimeDivState);
    }

    return <button onClick={handleClick} className="btn btn-outline-success btn-sm mr-2">
        Add time <FaClock/>
    </button>;
}