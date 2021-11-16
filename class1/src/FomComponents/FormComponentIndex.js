import React from 'react'
import FormInput from './FormInput'
import FormSelect from './FormSelect'

const FormComponentIndex = () => {

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [selectValue, setselectValue] = React.useState('')


    return (
        <div>
            <form>
                <FormSelect value={selectValue} setValue={setselectValue}  options={['smartphone', 'tablet', 'pc']}/>
                <FormInput label="Nome" nameInput="nome" value={nome} setValue={setNome} required />
                <FormInput label="Email" nameInput="email" value={email} setValue={setEmail} />
               
                <button type="submit">Submit</button>
      
            </form>
        </div>
    )
}

export default FormComponentIndex
