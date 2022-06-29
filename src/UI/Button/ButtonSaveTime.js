import {ModifyTaskOperation} from "../../views/Operations/oparations";

import {flipAddTimeForm} from "../../views/Operations/Operation";
import {FaSave} from "react-icons/fa";


export function ButtonSaveTime({
                                   operationData,
                                   addTimeFormValue,
                                   setOperations,
                                   setAddTimeFormValue,
                                   setAddTimeFormState,
                                   setAddTimeDivState,
                               }) {

    function handleClick(e) {

        const newOperation = {
            description: operationData.description,
            timeSpent: parseFloat(operationData.timeSpent) + parseFloat(addTimeFormValue)
        }

        e.preventDefault()
        ModifyTaskOperation(newOperation, operationData.task.id, operationData.id).then(setOperations(newOperation))
        setAddTimeFormValue("")
        flipAddTimeForm(setAddTimeFormState, setAddTimeDivState)
    }

    return <button onClick={handleClick} className="btn btn-outline-success"><FaSave/></button>;
}