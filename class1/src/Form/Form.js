import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
    return (
        <form>
            <label htmlFor="nome">Nome</label>
            <Input/>
            <label htmlFor="sobrenome">Sobrenome</label>
            <Input/>
            <Button/>
        </form>
    )
}

export default Form
