import React from 'react'
import { GlobalContext } from './GlobalContext'

const ContextProduto = () => {
    const dados = React.useContext(GlobalContext)
    return (
        <div>
            <h1>Produto</h1>
        </div>
    )
}

export default ContextProduto
