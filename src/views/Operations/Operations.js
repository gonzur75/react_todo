import {RenderOperation} from "./RenderOperation";
import {useState} from "react";
import {AddOperationButton} from "../../UI/Button/AddOperationButton";

function AddOperationForm({props}) {
    const [formValue, setFormValue] = useState('')


    if (props.form === true) {
        return <form>
            <div className="card-body">
            <div className="input-group">
                <input onChange={event => {setFormValue(event.target.value)}}
                       value={formValue}
                       type="text"
                       className="form-control"
                       placeholder="Operation description"/>

                <div className="input-group-append">
                    <AddOperationButton setOperations={props.setOperations}
                               task={props.taskID}
                               formValue={formValue}
                               setFormValue={setFormValue}
                               setForm={props.setForm}
                               set
                    />
                </div>
            </div>
                </div>
        </form>;
    }

}

export function Operations(props) {


    return (<>
        <AddOperationForm props={props}/>
        <ul className="list-group list-group-flush">
            <RenderOperation operations={props.operations}
                             setOperations={props.setOperations}
                             onRemoveOperation={props.onRemoveOperation}
            />
        </ul>
    </>);
}