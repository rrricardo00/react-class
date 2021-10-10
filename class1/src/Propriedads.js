import React from 'react'

const Titulo = (props) => {
    return (
        <>
            <h1 style={{color: props.cor}}>{props.texto} {props.linguagem} {props.teste}</h1>
        </>
    )
}

const Propriedads = () => {
    return (
        <>
            <Titulo cor="red" texto="Meu texto" linguagem="Minha linguagem" teste="Mensagem teste"></Titulo>
            <Titulo cor="blue" texto="Meu texto2"></Titulo>
        </>
    )
}

export default Propriedads
