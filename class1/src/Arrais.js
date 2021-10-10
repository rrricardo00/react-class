import React from 'react'
// const Arrais = () => {
//     const produtos = ['valor1', 'valor2', 'valor3', 'valor4']
//     return (
//         <div>
//             <ul>
//                 {
//                     produtos.map((item, index) =>{
//                        return <li key={item[index]}>{item}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];
const Arrais = () => {
    
    return (
        <div>
           {produtos.filter(item => +item.preco.replace('R$ ', '') > 1500).map(({id, preco, nome, cores}) => {
              return <div key={id}>
                   <h1>{nome}</h1>
                   <p>Preço {preco}</p>
                   <ul>
                       {cores.map(item => <li style={{backgroundColor: item, color: '#fff'}}>{item}</li>)}
                   </ul>
               </div>
           })}
        </div>
    )
}

export default Arrais
