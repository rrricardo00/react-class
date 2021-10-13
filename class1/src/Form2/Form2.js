import React from 'react'
import Button2 from './Button2'
import Input2 from './Input2'

const Form2 = () => {
    const arr = ['item4', 'item2']
    return (
        <div>
            <Input2 id="email" label="E-mail"></Input2>
            <Input2 id="senha" label="Senha" type="password"></Input2> 
            <Button2 item={arr}></Button2>
        </div>
    )
}

export default Form2
