import React from 'react'

const HookInput = ({label, nameInput, onChange, ...props}) => {
    return (
        <>
            <div><label>{label}<br/><input name={nameInput}  onChange={onChange} {...props} /></label></div>
        </>
    )
}

export default HookInput
