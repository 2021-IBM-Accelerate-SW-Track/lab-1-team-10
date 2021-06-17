import React from 'react'

const Button = ({ color, text, onClick }) => {
    return (
        <button data-testid="new-item-button" style={{ backgroundColor: color }} className='btn' onClick={onClick} >
            {text}
        </button>
    )
}

export default Button
