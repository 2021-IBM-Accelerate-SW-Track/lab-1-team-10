import React from 'react';
import './App.css';
import ItemsList from "./component/ItemsList";
import Header from "./component/header";


class App extends React.Component {
  
  constructor(props) {
    super(props);
      
  }
  render() {
  
    
    return (
   <div>
    <Header></Header>
    <br/>
    <br/>
    <br/>
    <ItemsList></ItemsList>
  </div>
    );


  }
}


export default App;
