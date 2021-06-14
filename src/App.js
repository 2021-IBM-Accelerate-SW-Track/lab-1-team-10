import Header from "./component/header"
import Button from "./component/header/button";
import Tasks from "./component/header/Tasks";
import './App.css';



function App() {
  
  return (
    <div className="App">
      
      <Header title='2021 IBM Accelerate Software Track Lab 1 Team 10 To Do List App' />
      <Button color='steelblue' />
      <Tasks />

    </div>
  );
}



export default App;
