import React from 'react'

const FormCheckBox = ({ options, setSelectCheck, value, ...props }) => {

    const getValor = ({ target }) => {

        if(target.checked){
            setSelectCheck([...value, target.value])
        } else{
            setSelectCheck(value.filter((e) => e !== target.value ))
        }

       

    }

    return (
        <>
            {options.map((e) => <label key={e}><input type="checkbox" checked={value.includes(e)} value={e} onChange={getValor} /> {e}</label>)}
        </>
    )
}

export default FormCheckBox
