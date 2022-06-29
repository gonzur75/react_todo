import {useEffect, useState} from "react";
import {FaArchive} from "react-icons/fa";
import {getTasksOperations, RemoveTaskOperation, updateTask} from "../Operations/oparations";
import {Operations} from "../Operations/Operations";
import {RemoveTaskButton} from "../../UI/Button/removeTaskButton";
import {ButtonAddOperations} from "../../UI/Button/switchFormStatus";


function FinishTaskButton({task, refreshTask}) {

    function handleClick(e) {
        e.preventDefault()
        updateTask({
            ...task,
            status: 'closed'
        }, task.id).then(refreshTask())
    }

    return <button onClick={handleClick} className="btn btn-dark btn-sm">
        Finish <FaArchive/>
    </button>;
}

export function Task({task, onRemoveTask, updateTask}) {
    const [formStatus, setFormStatus] = useState(false)
    const [status, setStatus] = useState(null)
    const [operations, setOperations] = useState([])

    useEffect(() => {
        setStatus(task.status);
    }, [])

    function switchFormStatus() {
        setFormStatus(prevState => !prevState)
    }

    function updateOperations() {
        getTasksOperations(task.id).then(data=> setOperations(data))
    }

    useEffect(() => {
        getTasksOperations(task.id).then(data=> setOperations(data))

    }, [])

    function removeOperation(operationID) {
        RemoveTaskOperation(operationID).then(updateOperations)
    }


    return (<>
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{task.title}</h5>
                    <h6 className="card-subtitle text-muted">{task.description}</h6>
                </div>
                <div>

                    {/*// Przyciski "Add operation" i "Finish" mają być widoczne*/}
                    {/*// tylko jeżeli status zadania jest "open"*/}

                    {task.status==='open' && <ButtonAddOperations switchFormStatus={switchFormStatus}/>}
                    {task.status==='open' && <FinishTaskButton task={task} refreshTask={updateTask}/>}

                    {/*Przycisk usuwania ma być widoczny tylko*/}
                    {/*jeżeli nie ma żadnych operacji w zadaniu*/}

                    <RemoveTaskButton taskID={task.id} onRemoveTask={onRemoveTask} operations={operations}/>
                </div>
            </div>
            <Operations operations={operations} form={formStatus}
                        setForm={setFormStatus}
                        setOperations={updateOperations}
                        status={status}
                        taskID={task.id}
                        onRemoveOperation={removeOperation}
            />
        </section>
    </>);

}