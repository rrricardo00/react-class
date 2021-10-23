import React from 'react'

export const Contexto = React.createContext()

export const GlobalStorage = ({ children }) => {

    const [contar, setContar] = React.useState(0)

    const adicionar1 = () => setContar(contar+1)
    const adicionar2 = () => setContar(contar+2)

    return (
        <Contexto.Provider value={{ adicionar1, adicionar2, contar}}>{children}</Contexto.Provider>
    )



}
