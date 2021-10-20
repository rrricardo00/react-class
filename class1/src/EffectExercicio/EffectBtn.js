import React from 'react'

const EffectBtn = ({texto, clicar}) => {
    return (
        <>
            <button onClick={clicar}>{texto}</button>
        </>
    )
}

export default EffectBtn
