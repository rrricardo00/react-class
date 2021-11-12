import React from 'react'

const FormSelect = ({options, select, setSelect}) => {

    const [desativar, setDesativar] = React.useState(false)

    const funcDesativar = () => setDesativar(true)

    return (
        <div>
            <select onChange={funcDesativar}>
                <option value="" disabled={desativar}>Escolha uma opção</option>
                {options.map((item) =>{
                    return(
                    <option onChange={({target}) => setSelect(target.value)} key={item} value={select}>{item}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FormSelect
