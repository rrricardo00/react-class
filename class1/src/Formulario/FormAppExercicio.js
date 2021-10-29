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

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input id="nome" type="text" value={form.nome}/>
                <button>Enviar</button>
            </form>

        </div>
    )
}

export default FormAppExercicio
