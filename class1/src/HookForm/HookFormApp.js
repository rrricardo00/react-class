import React from 'react'
import HookInput from './HookInput'
import useForm from './useForm'

const HookFormApp = () => {

    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm('')
    const sobrenome = useForm(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (cep.validate() && email.validate() && nome.validate) {
            console.log('enviou')
        } else {
            console.log('nao enviar')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <HookInput label="CEP" nameInput="cep" type="text" {...cep} placeholder="00000-000" />
            <HookInput label="E-MAIL" nameInput="email" type="email" {...email} placeholder="email@email.com" />
            <HookInput label="NOME" nameInput="nome" type="text" {...nome} placeholder="Nome" />
            <HookInput label="SOBRENOME" nameInput="sobrenome" type="text" {...sobrenome} placeholder="Sobrenome" />
            <button>Enviar</button>
        </form>

    )
}

export default HookFormApp
