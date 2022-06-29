import {FaTimes} from "react-icons/fa";
import {flipAddTimeForm} from "../../views/Operations/Operation";

export function CloseTimeFormButton({setAddTimeFormState, setAddTimeDivState}) {
    function handleClick(e) {
        e.preventDefault();
        flipAddTimeForm(setAddTimeFormState, setAddTimeDivState);
    }

    return <button onClick={handleClick} className="btn btn-outline-dark"><FaTimes/></button>;
}