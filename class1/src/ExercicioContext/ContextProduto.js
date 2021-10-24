import React from 'react'
import { GlobalContext } from './GlobalContext'

const ContextProduto = () => {
    const dados = React.useContext(GlobalContext)
    console.log(dados)
    if (dados.produto === null) return null

    return (
        <div>
            <h1>produto</h1>
            <ul>
                {dados.produto.map(item => <li key={item.id}>{item.nome}: Preço: {item.preco}</li>)}
                <button onClick={dados.limparDados}>Limpar Lista</button>
            </ul>
        </div>
    )
}

export default ContextProduto
