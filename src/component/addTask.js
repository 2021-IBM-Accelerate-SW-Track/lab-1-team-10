import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text){
            alert('Please add in a task!')
            return
        }

        onAdd({text, day})
        setText('')
        setDay('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add a Task' value={text} onChange={(e) =>
                setText(e.target.value)}></input>
            </div>        
            <div className='form-control'>
                <label>Date and Time</label>
                <input type='text' 
                placeholder='Add a Current Date and Time' 
                value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
