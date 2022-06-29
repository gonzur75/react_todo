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
        return <h4 className="list-group-item d-flex justify-content-between align-items-center"> There are no operations, please add one with 'Add operation' button!! </h4>
    }
}