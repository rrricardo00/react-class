import React from 'react'

const RadioDesafio = ({ pergunta, options, respota, id }) => {
    return (
        <fieldset>
            <legend>{pergunta}</legend>
            {options.map(item =>
                <label key={item}>
                    <input type="radio" value={item}/>
                    {item}
                    <br/>
                </label>)}
        </fieldset>
    )
}

export default RadioDesafio
