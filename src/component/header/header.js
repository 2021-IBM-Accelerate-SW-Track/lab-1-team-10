import Button from "../button"

export default function Header({ title, onAdd, showAddTask }) {
    return (
        <header>
            <h1>{title}</h1>
            <Button
                color='green'
                text={showAddTask ? 'Close' : 'Add new Task'} 
                onClick={onAdd} 
            />
        </header>


    )
}