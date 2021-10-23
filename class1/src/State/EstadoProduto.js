import React from 'react'
import { Contexto} from './Contexto'

const EstadoProduto = () => {
    const dados = React.useContext(Contexto)
    return (
        <div>
            {dados.contar}
            <button onClick={dados.adicionar1}>Adicionar 1</button>
            <button onClick={dados.adicionar2}>Adicionar 2</button>
        </div>
    )
}

export default EstadoProduto
