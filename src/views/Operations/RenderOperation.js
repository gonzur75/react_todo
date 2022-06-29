import {Operation} from "./Operation";

export function RenderOperation({operations, setOperations, onRemoveOperation}) {

    if (operations.length > 0) {
        return operations.map(operation => {
            return <Operation key={operation.id}
                              operationData={operation}
                              setOperations={setOperations}
                              onRemoveOperation={onRemoveOperation}
            />
        })
    } else {
        return <h1> Yuppi no more tasks to do!! </h1>
    }
}