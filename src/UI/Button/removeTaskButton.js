import {FaTrash} from "react-icons/fa";

export function RemoveTaskButton({taskID, onRemoveTask, operations}) {

    function handleClick() {
        onRemoveTask(taskID)
    }

    if (operations.length === 0)
        return <button onClick={handleClick} className="btn btn-outline-danger btn-sm ml-2">
            Remove <FaTrash/>
        </button>;
}