import React from 'react'

const FormInput = ({label, nameInput, setValue, ...props}) => {
    return (
        <>
            <div><label>{label}<br/><input name={nameInput} onChange={({target}) => setValue(target.value)} {...props} /></label></div>
        </>
    )
}

export default FormInput
