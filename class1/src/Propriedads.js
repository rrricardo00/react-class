import React from 'react'

const Titulo = (props) => {
    return (
        <>
            <h1 style={{color: props.cor}}>{props.texto} {props.linguagem} {props.teste}</h1>
            <h3 style={{backgroundColor: props.cor}}>{props.children}</h3>

        </>
    )
}

const Propriedads = () => {
    return (
        <>
            <Titulo cor="#799000" texto="Meu texto" linguagem="Minha linguagem" teste="Mensagem teste"></Titulo>
            <Titulo cor="blue" texto="Meu texto2"></Titulo>
            <Titulo cor="#555">
                <p>Titulo filho 1</p>
                <p>Titulo filho 2</p>
                <p>Aqui outro filho </p>
            </Titulo>
        </>
    )
}

export default Propriedads
