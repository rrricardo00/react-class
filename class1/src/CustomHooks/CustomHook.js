import React from 'react'
import UseLocalStorage from './UseLocalStorage'

const CustomHook = () => {

    const [produto, setProduto] = UseLocalStorage('produto', '')

    const handleClick = ({target}) => setProduto(target.innerText)

    return (
        <div>
            <p>Produto preferido: {produto}</p>
            <button onClick={handleClick}>Notebook 2</button>
            <button onClick={handleClick}>Smartphone 2</button>
        </div>
    )
}

export default CustomHook
