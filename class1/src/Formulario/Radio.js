import React from 'react'

const Radio = () => {

    const [valor, setValor] = React.useState('')

    const handleChange = ({target}) => setValor(target.value)

    return (
        <div>
            <input type="radio" value="notebook" onChange={handleChange} checked={valor === 'notebook'} />
        </div>
    )
}

export default Radio
