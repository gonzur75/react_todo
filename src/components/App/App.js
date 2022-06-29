import './App.css';
import {Header} from "../Header/Header";
import {useEffect, useState} from "react";
import {addTask, getTasks, removeTask} from "../../views/Operations/oparations";
import {NewTask} from "../../views/Tasks/NewTask";
import {RenderTask} from "../../views/Tasks/RenderTasks";
import data from "bootstrap/js/src/dom/data";


function App() {
    const [tasks, setTask] = useState([])

    function refreshTask() {
        getTasks(updateTask)
    }
    function updateTask(data) {
        setTask(data)
    }

    useEffect(() => {
        getTasks(updateTask)

    }, [])

    function onRemoveTask(taskId) {
        // const updatedTasks = tasks.filter(task => task.id !== taskId);
        // updateTask(updatedTasks)
        removeTask(taskId).then(data => data && refreshTask())
    }
    function onNewTask(data) {
        addTask(data).then(data=>data && refreshTask())
    }
    return (
        <div className="container mb-5">
            <Header/>
            <NewTask onNewTask={onNewTask} />
            <RenderTask tasks={tasks} onRemoveTask={onRemoveTask} updateTask={refreshTask} />
        </div>);
}

export default App;
