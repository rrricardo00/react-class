import React from 'react'

const FormSelect = ({options, value, setValue}) => {

    const [desativar, setDesativar] = React.useState(false)

    const funcDesativar = () => setDesativar(true)

    const valore = ({target}) => {setValue(target.value); funcDesativar()}


    return (
        <div>
            <select value={value} onChange={valore}>
                <option value="" disabled={desativar}>Escolha uma opção</option>
                {options.map((item) =>{
                    return(
                    <option key={item}>{item}</option>
                    )
                    
                })}
            </select>
         
        </div>
    )
}

export default FormSelect
