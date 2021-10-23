import React from 'react'
import ContextProduto from './ContextProduto'
import { GlobalContextStorage } from './GlobalContext'

const AppContext = () => {
    return (
        <div>
            <GlobalContextStorage>
                <ContextProduto />
            </GlobalContextStorage>
        </div>
    )
}

export default AppContext
