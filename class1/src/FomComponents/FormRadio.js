import React from 'react'

const FormRadio = ({options, setValue, value, ...props}) => {

    const atualValor = ({target}) => setValue(target.value)

    return (
        <>
            {options.map((e) => {
                return <label key={e}><input {...props} value={e} onChange={atualValor} checked={value === e}  type="radio" /> {e}</label>
            })}
            
        </>
    )
}

export default FormRadio
