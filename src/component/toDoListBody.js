import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './toDoListBody.css';

const Main = () => {
	
	
	const [item, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);
	
	const firstEvent = (event) => {
		setItem(event.target.value);
	}
	
	const secondEvent = () => {
		

		setNewItem((prev)=>{
			return [...prev, item]
		});
		
		setItem("");
		
	}
	
	const thirdEvent = () => {
		setNewItem([]);
	}
	const useStyles = makeStyles({
		root: {
		  background: 'linear-gradient(45deg, #007D79 30%, #0F62FE 90%)',
		  borderRadius: 15,
		  border: 0,
		  color: 'white',
		  height: 75,
		  padding: '0 30px',
		  boxShadow: '5px 5px 25px -5px rgba(0,0,0,0.5)',
		  
		},
		label: {
		  textTransform: 'capitalize',
		  fontFamily: 'georgia',
		},
	  });
	  const classes = useStyles();
	return(
		
		<div>
			<br />
			<br />
			<div className="childOne">
				<input type="text" value={item} placeholder="Add your task" onChange={firstEvent} />
				<Button className="AddBtn" onClick={secondEvent} >
					<AddIcon />
				</Button>
				<br />
				<br />
				<ul className="textFont">
					{
						newItem.map((val) => {
							return <li> {val} </li>;
						})
					}
				</ul>
			</div>
			<br />
			<br />
			<div className="childTwo">
				<Button className="delBtn" onClick={thirdEvent} classes={{root: classes.root, label: classes.label,}}>
					<DeleteIcon />Delete It All
				</Button>
			</div>
		</div>
	);
}


export default Main;