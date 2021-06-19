import { FaTimes } from 'react-icons/fa'
import EditIcon from '@material-ui/icons/Edit';
import EditTask from './EditTask';
import { useState } from 'react'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const Task = ({ key, task, onDelete, onEdit, completeTasks }) => {
    const [showEditTask, setEditTask] = useState(false)
    return (
        <div className='task'>
            <h3>
                {(task.complete ? (<CheckBoxIcon style = {{ color: 'green' }} onClick={() => completeTasks(task.id)}/>) : (<CheckBoxOutlineBlankIcon  style = {{ color: '#002D9C' }} onClick={() => completeTasks(task.id)}/>))}
                {(task.complete) ? <p className='crossedLine' style={{ color: 'green' }}>{task.text}</p>  : <p style={{ color: '#002D9C' }}>{task.text}</p>}
                <EditIcon cursor='pointer' onClick={() => setEditTask(!showEditTask)} />
                <FaTimes cursor='pointer' onClick={() => onDelete(task.id)} />
            </h3>
            <h3>{task.date}</h3>
            {showEditTask && (<EditTask onEdit={onEdit} id={task.id} setEditTask={setEditTask} originalText={task.text} />)}
        </div>
    )
}

export default Task


//onClick={() => (<EditTask onEdit={onEdit} id={task.id}/>)}