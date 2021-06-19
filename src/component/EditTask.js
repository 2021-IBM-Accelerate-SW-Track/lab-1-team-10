import { useState } from 'react'
import { Button } from '@material-ui/core'

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
            <Button color='primary' variant='contained' type='submit'>Save Task</Button>
        </form>
    )
}

export default EditTask
