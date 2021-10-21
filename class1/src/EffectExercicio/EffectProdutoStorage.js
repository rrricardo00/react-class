import React from 'react'

const EffectProdutoStorage = ({localNome, localpreco}) => {

    return (
        <div>
           <h1>{localNome}</h1>
            <h3>R$ {localpreco}</h3>
        </div>
    )
}

export default EffectProdutoStorage
