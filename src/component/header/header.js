import Button from "../button"

export default function Header({ title, onAdd, showAdd }) {
    return (
        <header>
            <h1>{title}</h1>
            <Button
                color='green'
                text={showAdd ? 'Close' : 'Add new Task'} 
                onClick={() => onAdd()} 
            />
        </header>


    )
}