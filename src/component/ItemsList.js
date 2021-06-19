import '../App.css';
import React from 'react';
import Item from "./Item"



class ItemList extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {

      items:[]
    }

    this.addInput= React.createRef();

  }
    // Object that can have as many keys and properties as you want
  
    addtoList = () => {
      if(this.addInput.current !== null){
      var text = this.addInput.current.value
      var item = {text: text, createDate: new Date() };
      this.setState((prevState)=>({
          items:[item, ...prevState.items]
      
    }))

  }

}

  getAllItems = () =>{
    
    return this.state.items.map((item,index)=> {
      return <Item onClick={()=>{this.removeItem(index)}} key={index} text={item.text} createDate={item.createDate}></Item>
    }) 

}

  removeItem =(itemId) =>{

    var newArray = this.state.items.filter((item,index) => index !== itemId);
    this.setState((prevState) => ({
      items:newArray
  }))

  }

  render() {

    return (
    <div className="task-container">
      <div className="task-div">
        <input type="text"  ref= {this.addInput} className="task-input"/>
        <button onClick = {this.addtoList} className="add-button">Add </button>
      </div>

      {this.getAllItems()}
      
    </div>

    );

    
  
  }


}

export default ItemList;
