import {FaTrash} from "react-icons/fa";
import Badge from 'react-bootstrap/Badge'
import {useState} from "react";
import {CloseTimeFormButton} from "../../UI/Button/CloseTimeFormButton";
import {ButtonSaveTime} from "../../UI/Button/ButtonSaveTime";
import {AddTimeButton} from "../../UI/Button/AddTimeButton";

function AddTimeForm({visible, operationData, setAddTimeFormState, setAddTimeDivState, setOperations}) {
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
                    <ButtonSaveTime operationData={operationData}
                                    addTimeFormValue={addTimeFormValue}
                                    setOperations={setOperations}
                                    setAddTimeFormValue={setAddTimeFormValue}
                                    setAddTimeFormState={setAddTimeFormState}
                                    setAddTimeDivState={setAddTimeDivState}
                    />
                    <CloseTimeFormButton
                        setAddTimeFormState={setAddTimeFormState}
                        setAddTimeDivState={setAddTimeDivState}/>
                </div>
            </div>
        </form>;
    }
}


export function flipAddTimeForm(setAddTimeFormState, setAddTimeDivState) {
    setAddTimeFormState(prevState => !prevState)
    setAddTimeDivState(prevState => !prevState)
}

export function timeFormatted(number) {
    if (number => 60) {
        const hours = Math.floor(number / 60);
        const minutes = number % 60
        return hours + "h " + minutes + "m"
    } else {
        return number + "m"
    }
}

export function Operation({operationData, setOperations}) {
    const [addTimeFormState, setAddTimeFormState] = useState(false)
    const [addTimeDivState, setAddTimeDivState] = useState(true)
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {operationData.description}
                {operationData.timeSpent > 0 &&
                    <Badge pill bg="success" style={{marginLeft: 12}}>{timeFormatted(operationData.timeSpent)}</Badge>
                }
            </div>


            {/*Formularz wyświetlany po naciśnięciu "Add time", po zapisie czasu znika */}
            <AddTimeForm visible={addTimeFormState}
                         operationData={operationData}
                         setAddTimeFormState={setAddTimeFormState}
                         setAddTimeDivState={setAddTimeDivState}
                         setOperations={setOperations}
            />

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