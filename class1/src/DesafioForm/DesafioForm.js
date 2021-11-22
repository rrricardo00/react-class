import React from 'react'
import RadioDesafio from './RadioDesafio'

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];
  

const DesafioForm = () => {

    const [respostas, setResopostas] = React.useState({
        p1: '',
        p2: '',
        p3: '',
        p4: ''
    })

    return (
        <form>
            {perguntas.map(pergunta =><RadioDesafio {...pergunta} />)}
            
            <button>Proximo</button>
        </form>
    )
}

export default DesafioForm
