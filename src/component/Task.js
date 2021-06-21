import EditIcon from '@material-ui/icons/Edit';
import EditTask from './EditTask';
import { useState } from 'react'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Delete';

const Task = ({ key, task, onDelete, onEdit, completeTasks }) => {
    const [showEditTask, setEditTask] = useState(false)
    return (
        <div className='task'>
            <h3>
                {(task.complete ? (<CheckBoxIcon style = {{ color: 'cornflowerblue' }} onClick={() => completeTasks(task.id)}/>) : (<CheckBoxOutlineBlankIcon  style = {{ color: '#ffffff' }} onClick={() => completeTasks(task.id)}/>))}
                {(task.complete) ? <p className='completedTask' style={{ color: 'cornflowerblue' }}>{task.text}</p>  : <p className='uncompletedTask' style={{ color: '#ffffff' }}>{task.text}</p>}
                <EditIcon cursor='pointer' onClick={() => setEditTask(!showEditTask)} />
                <DeleteIcon cursor='pointer' onClick={() => onDelete(task.id)} />
            </h3>
            <h3>{task.date}</h3>
            {showEditTask && (<EditTask onEdit={onEdit} id={task.id} setEditTask={setEditTask} originalText={task.text} />)}
        </div>
    )
}

export default Task


//onClick={() => (<EditTask onEdit={onEdit} id={task.id}/>)}