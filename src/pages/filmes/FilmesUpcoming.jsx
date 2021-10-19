import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cartao from '../../components/Cartao'
import apiFilmes from '../../services/apiFilmes'

const FilmesUpcoming = () => {
    const [filmes, setfilmes] = useState([])

    useEffect(() => {   
        
        apiFilmes.get('/movie/upcoming?language=pt-BR').then(resultado=> {
            setfilmes(resultado.data.results);
        })
    }, [])


    console.log(filmes)
    return (
        <>
            <h1>Filmes Upcoming</h1>

            <Row>
            {filmes.map(filme=>(
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

export default FilmesUpcoming
