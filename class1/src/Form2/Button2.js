import React from 'react'

const Button2 = (props) => {
    return (
        <div>
           {
           props.item[0] === 'item1' ? <button>{props.item[0]}</button> : <button>{props.item[1]}</button>
           }
        </div>
    )
}

export default Button2
