import React from 'react'

const Input2 = (props) => {
    return (
        <div>
            <label id={props.label} htmlFor={props.id}>{props.label}</label>
            <input id={props.id} name={props.id} type="text"></input>
        </div>
    )
}

export default Input2
