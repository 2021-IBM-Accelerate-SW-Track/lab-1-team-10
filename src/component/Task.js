import { FaTimes } from 'react-icons/fa'
import EditIcon from '@material-ui/icons/Edit';
import EditTask from './EditTask';
import { useState } from 'react'

const Task = ({ key, task, onDelete, onEdit, getEdit }) => {
    const [showEditTask, setEditTask] = useState(false)

    return (
        <div className='task'>
            <h3>
                {task.text}
                <EditIcon cursor='pointer' onClick={() => setEditTask(!showEditTask)} />
                <FaTimes cursor='pointer' onClick={() => onDelete(task.id)} />
            </h3>
            <h3>{task.date}</h3>
            {showEditTask && (<EditTask onEdit={onEdit} id={task.id} setEditTask={setEditTask}/>)}
        </div>
    )
}

export default Task


//onClick={() => (<EditTask onEdit={onEdit} id={task.id}/>)}