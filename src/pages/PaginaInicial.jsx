import React from 'react'
import { Container } from 'react-bootstrap'
import Box from '../components/Box'
import HelloWorld from './HelloWorld'

const PaginaInicial = () => {
    return (
        <>
            <Container>
                <p>Lucas Steinhorst</p>

                <Box title="Meu primeiro Card" variant="success" />
                <p>
                    lorem ipsum
                </p>
                <Box title="Meu segundo Card" />

                <HelloWorld />
            </Container>
        </>
    )
}

export default PaginaInicial
