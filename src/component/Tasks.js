import Task from './Task.js'

const Tasks = ({ tasks, onDelete, onEdit, getEdit }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} getEdit={getEdit} />
            ))}
        </div>
    )
}

export default Tasks
