import React from 'react'

const Button = ({ color }) => {
    const onClick = (e) => console.log(e);

    return (
        <button onClick={onClick('aegea')} style={{backgroundColor: color}} >Add</button>
    )
}

export default Button
