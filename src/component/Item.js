import "../App.css";
import React from 'react';
import Trash from "../Trash.png"

class Item extends React.Component {
    constructor(props){
        super(props);
    }



render() {
    return (

        <div className="itemDesign">
            <li>{this.props.text} </li>
            <p className="dateItem">{this.props.createDate.toDateString()}</p>
            <img onClick={this.props.onClick} className="RemoveButton" alt="TrashCan" src={Trash} ></img>
        
        </div>
    );


}

}

export default Item;