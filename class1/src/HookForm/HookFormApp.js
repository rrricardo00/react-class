import React from 'react'
import HookInput from './HookInput'
import useForm from './useForm'

const HookFormApp = () => {

    const cep = useForm('cep');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (true) {
            console.log('enviou')
        } else {
            console.log('nao enviar')
        }

    }

    return (
        <form>
            <HookInput label="CEP" nameInput="cep" type="text" placeholder="00000-000" />
            {/* {erro && <p>{erro}</p>} */}
            <button>Enviar</button>
        </form>

    )
}

export default HookFormApp
