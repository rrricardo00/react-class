import React from 'react'

const Ref = () => {

    //     const [comentario, setComentario] = React.useState([]);
    //     const [input, setInput] = React.useState('');
    //     const elementoInput = React.useRef();

    //     function handleClick() {
    //         setComentario([...comentario, input])
    //         setInput('')
    //         elementoInput.current.focus()
    //     }

    //     React.useEffect(() => {
    //         elementoInput.current.focus()
    //     }, [])

    //     return (
    //         <div>

    //             <input ref={elementoInput} type="text" value={input} onChange={({ target }) => setInput(target.value)} />

    //             <button onClick={handleClick}>Enviar</button>

    //             <ul>
    //                 {comentario.map((comentario, index) => <li key={index}>{comentario}</li>)}
    //             </ul>
    //         </div>
    //     )


    const [carrinho, setCarrinho] = React.useState(0)
    const [notificar, setNotificacao] = React.useState(null)
    const referencia = React.useRef()

    function handleClick() {
        setCarrinho(carrinho + 1)
        setNotificacao('Item adicionado ao carrinho')

        clearTimeout(referencia.current)
        referencia.current = setTimeout(() => {
             setNotificacao(null)   
        }, 1000);
    }



    return (
        <div>
            <p>{notificar}</p>
            <button onClick={handleClick}>Adicionar ao Carrinho </button>
            <button>{carrinho}</button>
        </div>
    )

}
export default Ref
