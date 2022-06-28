import {FaClock, FaSave, FaTimes, FaTrash} from "react-icons/fa";
import Badge from 'react-bootstrap/Badge'
import {useState} from "react";
import {ModifyTaskOperation} from "./oparations";
import data from "bootstrap/js/src/dom/data";

function ButtonSaveTime({operationData, addTimeFormValue}) {

    function handleClick(e) {

        const newOperation = {
            description:operationData.description,
            timeSpent: parseFloat(operationData.timeSpent) +  parseFloat(addTimeFormValue)
        }

        e.preventDefault()
        ModifyTaskOperation(newOperation, operationData.task.id, operationData.id)

    }

    return <button onClick={handleClick} className="btn btn-outline-success"><FaSave/></button>;
}

function AddTimeForm({visible, operationData}) {
    const [addTimeFormValue, setAddTimeFormValue] = useState('')


    if (visible) {
        return <form>
            <div className="input-group input-group-sm">
                <input type="number"
                       className="form-control"
                       placeholder="Spent time in minutes"
                       style={{width: "12rem"}}
                       value={addTimeFormValue}
                       onChange={(e) => setAddTimeFormValue(e.target.value)}
                />
                <div className="input-group-append">
                    <ButtonSaveTime operationData={operationData} addTimeFormValue={addTimeFormValue} />
                    <button className="btn btn-outline-dark"><FaTimes/></button>
                </div>
            </div>
        </form>;
    }
}


function AddTimeButton({setAddTimeFormState, setAddTimeDivState}) {

    function handleClick(e) {
        e.preventDefault()
        setAddTimeFormState(prevState => !prevState)
        setAddTimeDivState(prevState => !prevState)

    }

    return <button onClick={handleClick} className="btn btn-outline-success btn-sm mr-2">
        Add time <FaClock/>
    </button>;
}

export function Operation({operationData}) {
    const [addTimeFormState, setAddTimeFormState] = useState(false)
    const [addTimeDivState, setAddTimeDivState] = useState(true)
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {operationData.description}
                {operationData.timeSpent > 0 &&
                    <Badge pill bg="success" style={{marginLeft: 12}}>{operationData.timeSpent} min</Badge>
                }
            </div>


            {/*Formularz wyświetlany po naciśnięciu "Add time", po zapisie czasu znika */}
            <AddTimeForm visible={addTimeFormState} operationData={operationData}/>


            {/*div wyświetlany domyślnie, znika po wciśnięciu "Add time" */}
            {addTimeDivState &&
                <div>
                    {/*Przycisk widoczny tylko jeżeli status zadania jest "open"*/}
                    <AddTimeButton setAddTimeFormState={setAddTimeFormState}
                                   setAddTimeDivState={setAddTimeDivState}

                    />
                    <button className="btn btn-outline-danger btn-sm"><FaTrash/></button>
                </div>
            }

        </li>

    );
}