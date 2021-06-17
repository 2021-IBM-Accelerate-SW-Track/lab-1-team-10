import Task from './Task.js'

const Tasks = ({ tasks, onDelete, onEdit, completeTasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} completeTasks={completeTasks} />
            ))}
        </div>
    )
}

export default Tasks
