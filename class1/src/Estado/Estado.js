import React, { useState } from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'

const Estado = () => {
    // const [ativo, setAtivo] = useState(true);
    // const [dados, setDados] = useState({ nome: "Ricardo", idade: "30" })
    const [modal, setModal] = useState(false)

    // function handleClick() {
    //     setAtivo(!ativo)
    //     setDados({ ...dados, faculdade: "Claretiano" })
    //     console.log(ativo)
    // }

    return (
        <>
            {/* <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button> */}
            <div>
                {/* <p>{dados.nome}</p>
                <p>{dados.idade}</p>
                <p>{dados.faculdade}</p> */}

                {/* MODAL ABAIXO */}
                <div>{modal == true ? 'Modal Aberto' : 'Modal Fechado'}</div>
                <ButtonModal setModal={setModal} modal={modal}/>
                {modal == true && <Modal setModal={setModal}/>}
            </div>
        </>
    )
}

export default Estado
