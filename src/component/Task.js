import {FaTimes} from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className='task'>
            <h3>{props.task.text} <FaTimes cursor='pointer' onClick={() => props.onDelete(props.task.id)}/></h3>
        </div>
    )
}

export default Task
