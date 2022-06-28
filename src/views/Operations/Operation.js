import {FaPlusCircle} from "react-icons/fa";
import {RenderOperation} from "./RenderOperation";

export function Operations({operations}) {
    return (<>
        <div className="card-body">
            <form>
                <div className="input-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Operation description"/>

                    <div className="input-group-append">
                        <button className="btn btn-info">
                            Add
                            <FaPlusCircle className="ml-1"/>
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <ul className="list-group list-group-flush">
            <RenderOperation operations={operations}/>
        </ul>
    </>);
}