import React from 'react'

const CheckBox = () => {

    // const [valor, setValor] = React.useState(false)

    // const handleChange = ({target}) => setValor(target.checked)

    // return (
    //     <div>
    //         <label><input onChange={handleChange} checked={valor} type="checkbox"/>Aceito os termos</label>
    //         {valor && <p>Termos aceitos</p>}
    //     </div>
    // )

    const [cores, setCores] = React.useState(['vermelho'])

    const handleChange = ({ target }) => {
        if (target.checked)
            setCores([...cores, target.value])
        else
            setCores(cores.filter(item => item !== target.value))
    }

    const checkInclude = (cor) => cores.includes(cor)

    return (
        <div>
            <label><input onChange={handleChange} checked={checkInclude('azul')} value="azul" type="checkbox" />Azul</label><br />
            <label><input onChange={handleChange} checked={checkInclude('vermelho')} value="vermelho" type="checkbox" />Vermelho</label><br />
            {cores}
        </div>
    )
}

export default CheckBox
