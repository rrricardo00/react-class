import React from 'react'
import FormInput from './FormInput'
import FormSelect from './FormSelect'

const FormComponentIndex = () => {

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [select, setSelect] = React.useState('')


    return (
        <div>
            <form>
                <FormSelect value={select} setValue={setSelect} options={['smartphone', 'tablet', 'pc']}/>
                <FormInput label="Nome" nameInput="nome" value={nome} setValue={setNome} required />
                <FormInput label="Email" nameInput="email" value={email} setValue={setEmail} />
               
                <button type="submit">Submit</button>
                {select}
            </form>
        </div>
    )
}

export default FormComponentIndex
