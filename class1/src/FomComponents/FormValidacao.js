import React from 'react'
import FormInput from './FormInput'

const FormValidacao = () => {

    const [nome, setNome] = React.useState('')

    const validateCep = (value) =>{
        if(value.length === 0){
            
        }
    }

    const handleBlur = ({target}) =>{
        const regex = /^\d{5}-?\d{3}$/
        const validacao = regex.test(target.value)
        console.log(validacao)
    }

    return (
        <form>
          
            <FormInput onBlur={handleBlur} label="CEP" nameInput="cep" type="text" value={nome} setValue={setNome} placeholder="00000-000"/>
            
        </form>
       
    )
}

export default FormValidacao
