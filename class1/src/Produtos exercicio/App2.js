import React from 'react'
import Header2 from './Header2'
import Home from './Home'
import Produtos from './Produtos'

const App2 = () => {
    const {pathname} = window.location;

    let Pagina
  
    pathname === "/produtos" ? Pagina = Produtos : Pagina = Home

    return (
        <>
            <Header2 />
            <Pagina />
        </>
    )
}

export default App2
