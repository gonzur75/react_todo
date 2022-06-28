import './App.css';
import {Header} from "../Header/Header";
import {useEffect, useState} from "react";
import {getTasks} from "../../views/Operations/oparations";
import {Task} from "../../views/Tasks/tasks";


function NewTask() {
    return null;
}

function App() {
    const [tasks, setTask] = useState([])

    function updateTask(data) {
        setTask(data)
    }

    useEffect(()=>{
        getTasks(updateTask)

    }, [])

    return (
        <div className="container mb-5">
            <Header/>
            <NewTask/>
            {tasks.map((task)=> {
                console.log(task)
                return <Task key={task.id} task={task}/>
            })
            }
            <Task/>
        </div>
    );
}

export default App;
