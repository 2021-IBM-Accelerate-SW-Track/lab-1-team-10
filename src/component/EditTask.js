import { useState } from 'react'

const EditTask = ({ onEdit, id, setEditTask, originalText }) => {
    const [newText, setNewText] = useState(originalText)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!newText){
            alert('Please add in a task!')
            return
        }
        let date = new Date()
        let dateString = `Edited: ${date.toDateString()} at ${date.toTimeString()}`
        onEdit({text: newText, date: dateString, id: id})
        setNewText('')
        setEditTask(false)
    }

    return (
        <form  onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Edit your Task' value={newText} onChange={(e) =>
                setNewText(e.target.value)}></input>
            </div>        
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default EditTask
