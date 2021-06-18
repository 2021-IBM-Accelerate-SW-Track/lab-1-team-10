import { useState } from 'react'
import Header from "./component/header"
import Tasks from "./component/Tasks";
import './App.css';
import AddTask from './component/addTask';
import Button from './component/button';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  //adding a task
  const addTask = (task) => {
    let canAdd = true;
    //Checks for duplicate item
    tasks.forEach((t) => {
      if ((t.text).toLowerCase() === (task.text).toLowerCase()) {
        alert('Duplicate item - add something else!')
        canAdd = false;
      }
    })

    const id = Math.floor(Math.random() * 10000) + 1
    let newTask = {
      complete: false,
      id,
      ...task
    }
    if (canAdd) {
      setTasks([...tasks, newTask])
    }
  }

  //deleting a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //edit a task
  const editTasks = (newTask) => {
    setTasks(tasks.map((task) => {
      if (task.id === newTask.id) {
        task.text = newTask.text
        task.date = newTask.date
      }
      return task
    }))
  }

  const completeTasks = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        task.complete = !(task.complete)
      }
      return task
    }))
  }

  return (
    <div className="App">
      <Header
        title='2021 IBM Accelerate Software Track Lab 1 Team 10 To Do List App'
      />
      <Button 
        color='steelblue' 
        text={showAddTask ? 'Close' : 'Add new Task'} 
        onClick={() => setShowAddTask(!showAddTask)} 
        data-testid="new-item-button" 
      />
      {showAddTask && (<AddTask onAdd={addTask} />)}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTasks} completeTasks={completeTasks} />) : 'You finished everything on your list!'}
    </div>
  );
}

export default App;
