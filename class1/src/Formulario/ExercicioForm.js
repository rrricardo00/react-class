import React from 'react'

const ExercicioForm = () => {

    const [cores, setCores] = React.useState([])
    const [coresArray, setCoresArray] = React.useState(['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'])

    const handleChange = ({ target }) => {
        if (target.checked)
            setCores([...cores, target.value])
        else
            setCores(cores.filter(item => item !== target.value))
    }

    const checkInclude = (cor) => cores.includes(cor)

    return (
        <div>

            {coresArray.map(newColor => {
                return (<div key={newColor}><label><input onChange={handleChange} checked={checkInclude(newColor)} value={newColor} type="checkbox" />{newColor}</label></div>)
            })}
            <ul>
                {cores.map((cor) => (
                    <li key={cor}>{cor}</li>
                ))}
            </ul>

        </div>
    )
}

export default ExercicioForm
