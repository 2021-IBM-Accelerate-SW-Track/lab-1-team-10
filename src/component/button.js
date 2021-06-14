import React from 'react'

const Button = ({ color }) => {
    const onClick = (e) => console.log(e);

    return (
        <button className='btn' onClick={onClick('aegea')} >Add</button>
    )
}

export default Button
