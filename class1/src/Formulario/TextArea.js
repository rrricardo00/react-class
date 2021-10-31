import React from 'react'

const TextArea = () => {

    const [mensagem, setMensagem] = React.useState('')

    return (
        <div>
            <textarea id="mensagem" rows="5" value={mensagem} onChange={({target}) => setMensagem(target.value)}/>
            <p>{mensagem}</p>
        </div>
    )
}

export default TextArea
