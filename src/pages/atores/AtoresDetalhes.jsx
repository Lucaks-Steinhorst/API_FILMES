import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FaCross, FaRegHandPointLeft } from 'react-icons/fa'
import { VscStarFull } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const AtoresDetalhes = (props) => {

    const [atores, setAtores] = useState({})
    const [filmes, setFilmes] = useState([])
    const [imagens, setImagens] = useState([])

    useEffect(() => {  
        const id = props.match.params.id
        
        apiFilmes.get(`/person/${id}?language=pt-BR`).then((resultado) => {
            setAtores(resultado.data);
        });

        apiFilmes.get(`/person/${id}/movie_credits?language=pt-BR`).then((resultado) => {
            setFilmes(resultado.data.cast);
        });
        apiFilmes.get(`/person/${id}/images?language=pt-BR`).then((resultado) => {
            setImagens(resultado.data.profiles);
        });
    
    }, [props]);

    ////console.log(atores);

    return (
        <>
            <hr />
            { atores.id &&
                <>
                    <Row>
                        <Col md= "3">
                            <Card title={`${atores.character}(${atores.name})`}>
                                <Card.Img variant="top"
                                    src={`https://image.tmdb.org/t/p/w500/${atores.profile_path}`}
                                />                     
                            </Card>

                        </Col>
                        <Col md= "9">
                            <h1>{atores.name}</h1>
                            {atores.birthday && <p><VscStarFull/> Data de Nascimento: {atores.birthday}</p>}
                            {atores.deathday && <p><FaCross/> Data da Morte: {atores.deathday}</p>}
                            {atores.place_of_birth && <p>Naturalidade: {atores.place_of_birth}</p>}
                            <p>{atores.biography}</p>
                        </Col>
                    </Row>
                    <Col md={1}> 
                        <hr />
                    </Col>
                    <Button className="btn btn-dark" onClick={()=> props.history.goBack()}> 
                        <FaRegHandPointLeft/> Voltar
                    </Button>

                    <Col md={1}> 
                        <hr />
                    </Col>

                    <h1>Galeria de Imagens</h1>
                    <Row>
                        {imagens.map((imagem, i) => (
                        <React.Fragment key={i}>
                            {
                                imagem.file_path &&
                                <Col md={1}>
                                    <Card>
                                        <Card.Img variant="top"
                                        src={`https://image.tmdb.org/t/p/w500/${imagem.file_path}`}/>                     
                                    </Card>
                                </Col>
                            }
                        </React.Fragment>
                        ))}
                    </Row>

                    <hr/>
                    <h1>Filmes em que atuou</h1>
                    <Row>
                        {filmes.map(filme => (
                        <React.Fragment key={filme.id}>
                            {
                                filme.poster_path &&
                                <Col md="1">
                                    <Link to={`/filmes/${filme.id}`}>
                                        <Card title={`${filme.title}`}>
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}/>                     
                                        </Card>
                                    </Link>
                                </Col>
                            }
                        </React.Fragment>
                        ))}
                    </Row>

                    <hr/>
                    
                    <Button className="btn btn-dark" onClick={()=> props.history.goBack()}> 
                        <FaRegHandPointLeft/> Voltar
                    </Button>
                </>
            }


        </>
    )
}

export default AtoresDetalhes
