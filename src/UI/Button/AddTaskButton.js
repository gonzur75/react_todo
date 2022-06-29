import {FaPlusCircle} from "react-icons/fa";

export function AddTaskButton({onNewTask, newTask, setNewTask}) {

    function handleClick(e) {
        e.preventDefault()
        onNewTask({
            ...newTask,
            status: "open"
        })
        setNewTask({
            title: '',
            description: ''
        })
    }

    return <button onClick={handleClick} className="btn btn-info">
        Add task
        <FaPlusCircle style={{marginLeft: '12px'}}/>

    </button>;
}