import React from 'react'
import { GlobalStorage } from './Contexto'
import EstadoProduto from './EstadoProduto'

const Estado = () => {
    return (
        <div>
            <GlobalStorage>
                <EstadoProduto />
            </GlobalStorage>
        </div>
    )
}

export default Estado
