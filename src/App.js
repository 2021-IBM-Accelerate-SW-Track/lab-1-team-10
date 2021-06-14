import { useState } from 'react'
import Header from "./component/header"
import Button from "./component/button";
import Tasks from "./component/Tasks";
import './App.css';
import AddTask from './component/addTask';

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Meeting',
        date: 'soon',
        reminder: true,
      },
      {
        id: 2,
        text: 'Cook dinner',
        date: 'soon',
        reminder: true,
      }
    ])


    //adding a task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      let newTask = {
        id, 
        ...task
      }
      setTasks([...tasks, newTask])
    }

    //deleting a task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="App">

      <Header title='2021 IBM Accelerate Software Track Lab 1 Team 10 To Do List App' />
      <AddTask onAdd={addTask}/>

      <Button className='btn-block' color='steelblue' />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : 'You finished everything on your list!'}

    </div>
  );
}



export default App;
