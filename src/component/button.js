import React from 'react'

const Button = ({ color, text, onClick }) => {
    return (
        <button style={{ backgroundColor: color }} data-testid="new-item-button" className='btn' onClick={() => onClick()} >
            {text}
        </button>
    )
}

export default Button
