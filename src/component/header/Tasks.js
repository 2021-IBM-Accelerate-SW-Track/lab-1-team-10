import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
        {
            id: 1,
            text: 'Meeting',
            date: 'soon',
            reminder: true,
        }
    ])
    return (
        <div>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </div>
    )
}

export default Tasks
