import {useEffect, useState} from "react";
import {FaArchive, FaTrash} from "react-icons/fa";
import {getTasksOperations} from "../Operations/oparations";
import {Operations} from "../Operations/Operations";

function ButtonAddOperations({switchFormStatus}) {

    return <button onClick={switchFormStatus} className="btn btn-info btn-sm mr-2" >
        Add operation
    </button>;
}


export function Task({task}) {
    const [formStatus, setFormStatus] = useState(false)
    const [status, setStatus] = useState(null)
    const [operations, setOperations] = useState([])

    useEffect(() => {
        setStatus(task.status);
    }, [])

    // useEffect(()=> {
    //     setFormStatus(false)
    // }, [formStatus])

    function switchFormStatus() {
        setFormStatus(prevState => !prevState)
    }

    function updateOperations(data) {
        setOperations(prevState => [...prevState, data])
    }

    useEffect(() => {
        getTasksOperations(task.id).then(data=> setOperations(data))

    }, [])


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

                        <ButtonAddOperations switchFormStatus={switchFormStatus}/>
                        <button className="btn btn-dark btn-sm">
                            Finish <FaArchive/>
                        </button>

                        {/*Przycisk usuwania ma być widoczny tylko*/}
                        {/*jeżeli nie ma żadnych operacji w zadaniu*/}

                        <button className="btn btn-outline-danger btn-sm ml-2">
                            Remove <FaTrash/>
                        </button>
                    </div>
                </div>
                <Operations operations={operations} form={formStatus}
                    setForm={setFormStatus}
                    setOperations={updateOperations}
                    status={status}
                    taskID={task.id}/>
            </section>
        </>);

}