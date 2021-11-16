import React from 'react'

const FormRadio = ({...props}) => {
    return (
        <>
            <label><input {...props} type="radio" /> Radio 1</label>
        </>
    )
}

export default FormRadio
