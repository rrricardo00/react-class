import React from 'react'

const Modal = ({modal, setModal}) => {
    return (
        <div>
            Esse é um modal. <button onClick={() => setModal(false)}>Clique para fechar o modal</button>
        </div>
    )
}

export default Modal
