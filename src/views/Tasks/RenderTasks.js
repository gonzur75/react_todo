import {Task} from "./tasks";

export function RenderTask({tasks}) {
    if (tasks.length > 0) {
        return tasks.map((task) => {
            console.log(task)
            return <Task key={task.id} task={task} onRemoveTask={onRemoveTask}/>
        })
    } else {
        return <h1> Yuppi no more tasks to do!! </h1>
    }
}