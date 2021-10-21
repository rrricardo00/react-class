import React from 'react'
import EffectBtn from './EffectBtn'
import EffectProduto from './EffectProduto'
import EffectProdutoStorage from './EffectProdutoStorage'

const Effectindex = () => {

    const [dados, setDados] = React.useState(null)
    const [estado, setEstado] = React.useState(null)
    const [localNome, setLocalNome] = React.useState(localStorage.getItem('nome'))
    const [localpreco, setLocalPreco] = React.useState(localStorage.getItem('preco'))
    

    async function datas(e) {
        setEstado(false)
        const url = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`)
        const json = await url.json();
        setDados(json)
        setEstado(true)
    }

    React.useEffect(() => {
       
        return () =>{
            setLocalNome(null)
            setLocalPreco(null)
        }

    }, [dados])

    return (
        <div>
            <EffectBtn texto="smartphone" clicar={datas} />
            <EffectBtn texto="notebook" clicar={datas} />
            {estado === false && <p>Carregando dados</p>}
            {estado && dados && <EffectProduto dados={dados}/>}
            {localNome && localpreco && <EffectProdutoStorage localNome={localNome} localpreco={localpreco}/>}

        </div>
    )
}

export default Effectindex
