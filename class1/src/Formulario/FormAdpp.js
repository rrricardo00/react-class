import React from 'react'

const FormAdpp = () => {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')

    const submitCall = (e) => e.preventDefault()
        
    return (
        <div>
            <form onSubmit={submitCall}>
                <label htmlFor="nome">Nome</label>
                <input id="nome" name='nome' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input id="email" name='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>{nome}</p>
                <p>{email}</p>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default FormAdpp
