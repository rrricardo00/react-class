import React from 'react'
import FormInput from './FormInput'

const FormValidacao = () => {

    const [nome, setNome] = React.useState('')
    const [erro, setErro] = React.useState(null)

    const validateCep = (value) => {
        if (value.length === 0) {
            setErro('Preencha um valor')
            return false
        } else if (!/^\d{5}-?\d{3}$/.test(value)) {
            setErro('Preencha com um CEP válido')
            return false
        } else {
            setErro(null)
            return true
        }
    }

    const handleBlur = ({ target }) => {
        validateCep(target.value)
    }

    const handleChange = ({ target }) => {
        if (erro) validateCep(target.value)
        setNome(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateCep(nome)) {
            console.log('enviou')
        } else {
            console.log('nao enviar')
        }

    }

    return (
     
        <form onSubmit={handleSubmit}>
            <FormInput onBlur={handleBlur} label="CEP" nameInput="cep" type="text" value={nome} onChange={handleChange} placeholder="00000-000" />
            {erro && <p>{erro}</p>}
            <button>Enviar</button>
        </form>

    )
}

export default FormValidacao
