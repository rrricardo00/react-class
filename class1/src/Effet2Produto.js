import React from 'react'
import Effect3Produto from './Effect3Produto'

const Effet2Produto = () => {

    const [ativo, setAtivo] = React.useState(false)

    let handleClick = () => setAtivo(!ativo)

    return (
        <div>
            {ativo && <Effect3Produto/>}
            <button onClick={handleClick}>Modal</button>
        </div>
    )
}

export default Effet2Produto
