import {FaTrash} from "react-icons/fa";

export function DeleteOperationButton({onRemoveOperation, oparationID}) {

    function handleClick() {
        onRemoveOperation(oparationID)
    }

    return <button onClick={handleClick} className="btn btn-outline-danger btn-sm"><FaTrash/></button>;
}