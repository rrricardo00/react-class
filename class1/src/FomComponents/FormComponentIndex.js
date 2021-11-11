import React from 'react'
import FormInput from './FormInput'

const FormComponentIndex = () => {

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')

    

    return (
        <div>
            <form>
           <FormInput label="Nome" nameInput="nome" value={nome} setValue={setNome} required/>
           <FormInput label="Email" nameInput="email" value={email} setValue={setEmail} />
           <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default FormComponentIndex
