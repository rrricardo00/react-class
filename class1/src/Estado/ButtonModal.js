import React from 'react'

const ButtonModal = ({setModal, modal}) => {
    return (
        <div>
            <button onClick={() => setModal(!modal)}>{modal == false ? "Abrir" : "Fechar"}</button>
        </div>
    )
}

export default ButtonModal
