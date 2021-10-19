import React from 'react'
import Effet2Produto from './Effet2Produto'

const Effects = () => {

    const [contar, setContar] = React.useState(0)
    const [dados, setDados] = React.useState('')

    let handleClick = () => setContar(contar+1)

    React.useEffect(() => {
       fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
       .then(res => res.json())
       .then(res => setDados(res))
    }, [])

    // React.useEffect(() =>{
    //     console.log('executou')
    // }, [])
    
    // React.useEffect(() =>{
    //     document.title = "Total "+ contar
    // }, [contar])

    return (
        <div>
            <Effet2Produto/>
            <button onClick={handleClick}>{contar}</button>
           
        </div>
    )
}

export default Effects
