import { useState } from 'react'
import { Button } from '@material-ui/core'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        let date = new Date()
        let dateString = `Added: ${date.toDateString()} at ${date.toTimeString()}`
        e.preventDefault()
        if (!text){
            alert('Please add in a task!')
            return
        }
        onAdd({text, date:dateString})
        setText('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input data-testid="new-item-input" type='text' placeholder='Add a Task' value={text} onChange={(e) =>
                setText(e.target.value) }></input>
            </div>        
            <Button data-testid="new-item-button" color='primary' variant='contained' type='submit'>Save Task</Button>
        </form>
    )
}

export default AddTask
