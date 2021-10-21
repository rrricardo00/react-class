import React from 'react'

const Ref = () => {

    const video = React.useRef();
    
    return (
        <div>
           <div ref={video}>Teste</div>
        </div>
    )
}

export default Ref
