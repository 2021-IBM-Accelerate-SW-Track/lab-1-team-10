import React from 'react';
import Header from "./component/header"
import './App.css';
import Main from './component/toDoListBody';
//import { render } from '@testing-library/react';

class App extends React.Component {
  render(){
      return (
        <div>
          <Header />
          <Main />
        </div>
      );
  }
}

export default App;
