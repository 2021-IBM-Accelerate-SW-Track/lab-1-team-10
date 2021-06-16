import { useState } from 'react'

const EditTask = ({ onEdit, id, setEditTask }) => {
    
    const [newText, setNewText] = useState('')
    const [newDate, setNewDate] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!newText){
            alert('Please add in a task!')
            return
        }

        onEdit({text: newText, date: newDate, id: id})
        
        setNewText('')
        setNewDate('')
        setEditTask(false)
    }

    return (
        <form  onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Edit your Task' value={newText} onChange={(e) =>
                setNewText(e.target.value)}></input>
            </div>        
            <div className='form-control'>
                <label>Date and Time</label>
                <input type='text' 
                placeholder='Edit your date/time' 
                value={newDate} onChange={(e) => setNewDate(e.target.value)}></input>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default EditTask
