import {useState} from "react";
import {AddTaskButton} from "../../UI/Button/AddTaskButton";


export function NewTask({onNewTask}) {
    const [newTask, setNewTask] = useState({title: '', description: ''})

    const formStyle = {
        marginBottom: '12px'
    }

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        setNewTask(prevState => {
           return  { ...prevState,
                    [name]: value,
            }
        })
    }

    return (

        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="title"
                               placeholder="Title"
                               value={newTask.title}
                               onChange={handleChange}
                               style={formStyle}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="description"
                               placeholder="Description"
                               value={newTask.description}
                               onChange={handleChange}
                               style={formStyle}
                        />
                    </div>
                    <AddTaskButton onNewTask={onNewTask} newTask={newTask} setNewTask={setNewTask}/>
                </form>
            </div>
        </div>);
}