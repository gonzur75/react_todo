import {Operation} from "./Operation";

export function RenderOperation({operations, setOperations}) {

    if (operations.length > 0) {
        return operations.map(operation => {
            return <Operation key={operation.id}
                              operationData={operation}
                              setOperations={setOperations}
            />
        })
    } else {
        return <h1> Yuppi no more tasks to do!! </h1>
    }
}