import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from 'react'
import {Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cartao from '../../components/Cartao'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {

    const [filmes, setfilmes] = useState([])
    const [titulo, setTitulo] = useState('')

    useEffect(() => {

        apiFilmes.get('/movie/popular?language=pt-BR').then(resultado => {
            setfilmes(resultado.data.results);
        })
    }, [])

    function handleChange(event){
        const valor = event.target.value
        setTitulo(valor)
    }

    function handleClick(){
        //apiFilmes.get('/search/movie?query=' + valor + '&language=pt-BR').then(resultado => {
        apiFilmes.get(`/search/movie?query=${titulo}&language=pt-BR`).then(resultado => {
            setfilmes(resultado.data.results);
        })
    }


    return (
        <>
            <h1>Filmes Populares</h1>
            <Form className='mb-3'>
                <Row>
                    <Col md={11}>
                     <Form.Control type="text" name='titulo' value={titulo} onChange={handleChange} placeholder="Pesquisar Filme" />
                    </Col>
                    <Col md={1}>
                        <Button className="btn btn-dark" variant='info' onClick={handleClick}>Pesquisar</Button>
                    </Col>
                </Row>

               
            </Form>


            <Row className="mt-3">
                {filmes.map(filme => (
                    <Col key={filme.id} md={3} className="mb-3">

                        <Cartao
                            title={filme.title} src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} >
                            {filme.original_title} ({filme.release_date})
                            <hr />
                            <Link style={{ textDecoration: 'none' }} to={"/filmes/" + filme.id}>
                                <div className="d-grid gap-2">
                                    <Button className="btn btn-dark">
                                        Mais Detalhes
                                    </Button>
                                </div>
                            </Link>
                        </Cartao>

                    </Col>
                ))}
            </Row>
        </>
    )
}

export default FilmesPopulares
