import React from 'react'

const Radio = () => {

    const [valor, setValor] = React.useState('')

    const handleChange = ({target}) => setValor(target.value)

    return (
        <div>
            <label><input type="radio" value="notebook" onChange={handleChange} checked={valor === 'notebook'} /> Notebook</label><br/>
            <label><input type="radio" value="smartphone" onChange={handleChange} checked={valor === 'smartphone'} /> Smartphone</label>
            {valor}
        </div>
    )
}

export default Radio
