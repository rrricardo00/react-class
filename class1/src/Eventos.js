import React from 'react'

function ativar(e) {
    e.target.classList.toggle('ativar')
}

function clicar(e) {
    console.log(e.target.innerText);
    ativar(e);
}

const Eventos = () => {
    return (
        <div>
            <button onClick={clicar}>Botao</button>
            <p>{clicar}</p>
        </div>
    )
}

export default Eventos
