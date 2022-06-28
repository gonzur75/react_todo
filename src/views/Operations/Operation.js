import {FaClock, FaSave, FaTimes, FaTrash} from "react-icons/fa";
import Badge from 'react-bootstrap/Badge'
import {useState} from "react";

function AddTimeForm({visible}) {
    const [addTimeFormValue, setAddTimeFormValue] = useState('')


    if (visible) {
        return <form>
            <div className="input-group input-group-sm">
                <input type="number"
                       className="form-control"
                       placeholder="Spent time in minutes"
                       style={{width: "12rem"}}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success"><FaSave/></button>
                    <button className="btn btn-outline-dark"><FaTimes/></button>
                </div>
            </div>
        </form>;
    }
}


function AddTimeButton({setAddTimeFormState}) {

    function handleClick(e) {
        e.preventDefault()
        setAddTimeFormState(prevState => !prevState)

    }

    return <button onClick={handleClick} className="btn btn-outline-success btn-sm mr-2">
        Add time <FaClock/>
    </button>;
}

export function Operation({operationData}) {
    const [addTimeFormState, setAddTimeFormState] = useState(false)
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {operationData.description}
                {operationData.timeSpent > 0 &&
                    <Badge pill bg="success" style={{marginLeft: 12}}>{operationData.timeSpent}</Badge>
                }
            </div>


            {/*Formularz wyświetlany po naciśnięciu "Add time", po zapisie czasu znika */}
            <AddTimeForm visible={addTimeFormState} />


            {/*div wyświetlany domyślnie, znika po wciśnięciu "Add time" */}
            <div>
                {/*Przycisk widoczny tylko jeżeli status zadania jest "open"*/}
                <AddTimeButton setAddTimeFormState={setAddTimeFormState} />

                <button className="btn btn-outline-danger btn-sm"><FaTrash/></button>
            </div>
        </li>

    );
}