import {useEffect, useState} from "react";
import {FaArchive, FaTrash} from "react-icons/fa";
import {getTasksOperations} from "../Operations/oparations";
import {Operations} from "../Operations/Operation";

function ButtonAddOperations() {
    return <button className="btn btn-info btn-sm mr-2" onClick={null}>
        Add operation
    </button>;
}


export function Task({task}) {

    const [status, setStatus] = useState(null)
    const [operations, setOperations] = useState([])

    useEffect(() => {

        setStatus(task.status);

    }, [status])

    function updateOpertations(data) {
        setOperations(data)

    }

    useEffect(() => {
        getTasksOperations(updateOpertations, task.id)

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

                        <ButtonAddOperations/>
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
                <Operations operations={operations}/>
            </section>
        </>);

}