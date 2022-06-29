import {FaPlusCircle} from "react-icons/fa";
import {RenderOperation} from "./RenderOperation";
import {useState} from "react";
import {AddTaskOperations} from "./oparations";

function AddButton({task, setOperations, formValue, setFormValue,setForm }) {

    function handleClick(e) {
        e.preventDefault()
        const newOperation ={
            description: formValue,
            timeSpent: 0
        }
        AddTaskOperations(newOperation, task).then(setOperations(newOperation))
        setFormValue('')
        setForm(false)

    }

    return <button onClick={handleClick} className="btn btn-info">
        Add
        <FaPlusCircle className="ml-1"/>
    </button>;
}

function AddOperationForm({props}) {
    const [formValue, setFormValue] = useState('')


    if (props.form === true) {
        return <form>
            <div className="input-group">
                <input onChange={event => {setFormValue(event.target.value)}}
                       value={formValue}
                       type="text"
                       className="form-control"
                       placeholder="Operation description"/>

                <div className="input-group-append">
                    <AddButton setOperations={props.setOperations}
                               task={props.taskID}
                               formValue={formValue}
                               setFormValue={setFormValue}
                               setForm={props.setForm}
                               set
                    />
                </div>
            </div>
        </form>;
    }

}

export function Operations(props) {

    function RemoveOperation() {
        return null;
    }
    return (<>
        <div className="card-body">
            <AddOperationForm props={props}/>
        </div>

        <ul className="list-group list-group-flush">
            <RenderOperation operations={props.operations}
                             setOperations={props.setOperations}/>
        </ul>
    </>);
}