import {AddTaskOperations} from "../../views/Operations/oparations";
import {FaPlusCircle} from "react-icons/fa";

export function AddOperationButton({task, setOperations, formValue, setFormValue, setForm}) {

    function handleClick(e) {
        e.preventDefault()
        const newOperation = {
            description: formValue,
            timeSpent: 0
        }
        AddTaskOperations(newOperation, task).then((data) => data && setOperations(newOperation))
        setFormValue('')
        setForm(false)

    }

    return <button onClick={handleClick} className="btn btn-info">
        Add
        <FaPlusCircle className="ml-1"/>
    </button>;
}