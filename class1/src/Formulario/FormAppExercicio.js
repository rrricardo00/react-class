import React from 'react'

const FormAppExercicio = () => {

    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
    })

    const [response, setResponse] = React.useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        

    }

    return (
        <div>
            form app exercicio
        </div>
    )
}

export default FormAppExercicio
