import {Operation} from "./Operation";

export function RenderOperation({operations}) {

    if (operations.length > 0) {
        return operations.map(operation => {
            return <Operation key={operation.id} operationData={operation}/>
        })
    } else {
        return <h1> Yuppi no more tasks to do!! </h1>
    }
}