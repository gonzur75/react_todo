import {FaClock, FaSave, FaTimes, FaTrash} from "react-icons/fa";

export function Operation({operationData}) {
    return (<li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {operationData.description}
                {/*Czas wyświetlany tylko jeżeli większy od 0 */}
                <span className="badge badge-success badge-pill ml-2">
      2h 15m
    </span>
            </div>


            {/*Formularz wyświetlany po naciśnięciu "Add time", po zapisie czasu znika */}
            <form>
                <div className="input-group input-group-sm">
                    <input type="number"
                           className="form-control"
                           placeholder="Spent time in minutes"
                           style={{width: '12rem'}}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success"><FaSave/></button>
                        <button className="btn btn-outline-dark"><FaTimes/></button>
                    </div>
                </div>
            </form>


            {/*div wyświetlany domyślnie, znika po wciśnięciu "Add time" */}
            <div>
                {/*Przycisk widoczny tylko jeżeli status zadania jest "open"*/}
                <button className="btn btn-outline-success btn-sm mr-2">
                    Add time <FaClock/>
                </button>

                <button className="btn btn-outline-danger btn-sm"><FaTrash/></button>
            </div>
        </li>

    );
}