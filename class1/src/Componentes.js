import React from 'react'
import Footer from './Footer'
import Form from './Form/Form'
import Header from './Header'

const Teste = () =>{
    const active = true;
  if(active){
      return <p>Texto</p>
  } else{
      return null
  }
}

const Componentes = () => {
    return (
        <div>
            <Teste/>
            <Header/>
            <p>Form abaixo</p>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Componentes
