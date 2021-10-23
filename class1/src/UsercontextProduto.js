import React from 'react'
import userContextjs from './userContextjs'

const UsercontextProduto = () => {

    const dado = React.useContext(userContextjs)

    return (
        <div>
            {dado.nome}
        </div>
    )
}

export default UsercontextProduto

