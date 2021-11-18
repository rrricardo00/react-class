import React from 'react'

const HookInput = ({ label, nameInput, onChange, value, type, onBlur, placeholder, error }) => {
    return (
        <>
            <div><label>{label}<br /><input name={nameInput} onChange={onChange} placeholder={placeholder} onBlur={onBlur} type={type} value={value} /></label>{error && <p>{error}</p>}</div>
        </>
    )
}

export default HookInput
