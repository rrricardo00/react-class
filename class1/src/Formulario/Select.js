import React from 'react'

const Select = () => {

    const [select, setSelect] = React.useState('')



    return (
        <div>
            <select value={select} onChange={({ target }) => setSelect(target.value)}>
                <option disabled value="">Escolha um valor</option>
                <option value="opção 1">1</option>
                <option value="opção 2">2</option>
            </select>
            {select}
        </div>
    )
}

export default Select
