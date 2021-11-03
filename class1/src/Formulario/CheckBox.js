import React from 'react'

const CheckBox = () => {

    const [valor, setValor] = React.useState(false)

    const handleChange = ({target}) => setValor(target.checked)

    return (
        <div>
            <label><input onChange={handleChange} checked={valor} type="checkbox"/>Aceito os termos</label>
            {valor && <p>Termos aceitos</p>}
        </div>
    )
}

export default CheckBox
