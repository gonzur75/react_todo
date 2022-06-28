import './App.css';
import {Header} from "../Header/Header";
import {useEffect, useState} from "react";
import {getTasks} from "../../views/Operations/oparations";
import {NewTask} from "../../views/Tasks/NewTask";
import {RenderTask} from "../../views/Tasks/RenderTasks";


function App() {
    const [tasks, setTask] = useState([])

    function updateTask(data) {
        setTask(data)
    }

    useEffect(() => {
        getTasks(updateTask)

    }, [])

    const onRemoveTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        updateTask(updatedTasks)
    }

    return (<div className="container mb-5">
            <Header/>
            <NewTask/>
            <RenderTask tasks={tasks} onRemoveTask={onRemoveTask}/>
        </div>);
}

export default App;
