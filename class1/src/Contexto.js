import React from 'react'
import userContextjs from './userContextjs'
import UsercontextProduto from './UsercontextProduto'

const Contexto = () => {
    console.log(userContextjs)
    return (
        <userContextjs.Provider value={{nome: "Ricardo"}}>
            <UsercontextProduto/>
        </userContextjs.Provider>
    )
}

export default Contexto
