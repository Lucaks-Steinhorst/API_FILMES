import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'

const States = () => {

    const [contador, setContador] = useState(0)

    function subtrair(){ 
        const valor = contador -1
        setContador(valor)
    }

    function adicionar(){
        const valor = contador + 1
        setContador(valor)
    }

    

    return (
        <>
            <h1>States</h1>

            <Button variant="danger" onClick={subtrair}> - </Button>
            <span>{' ' + contador + ' '}</span>
            <Button variant="success" onClick={adicionar}> + </Button>
        </>
    )
}

export default States
