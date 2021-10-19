import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'
import { FaRegHandPointLeft } from 'react-icons/fa';
import Button from '@restart/ui/esm/Button';

const FilmesDetalhes = (props) => {

    const [filme, setFilme] = useState({});
    const [creditos, setCreditos] = useState({});
    const [imagens, setImagens] = useState([]);

    useEffect(() => {  
        const id = props.match.params.id ///id de cada filme
        
        apiFilmes.get(`/movie/${id}?language=pt-BR`).then((resultado) => {
            setFilme(resultado.data);
        });

        apiFilmes.get(`/movie/${id}/credits?language=pt-BR`).then((resultado) => {
            setCreditos(resultado.data);
        });

        apiFilmes.get(`/movie/${id}/images?language=en`).then((resultado) => {
            setImagens(resultado.data);
        });
    
    }, [props]);

    console.log(creditos);

    
    return (
        <>
        {!filme.id && <h1>Carregando</h1>}
        {
            filme.id &&
            <>
                <Row className="mt-4">
                    <Col md={3}>
                        <Card>
                            <Card.Img variante="top" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}/>
                        </Card>
                    </Col>
                    <Col md={9}>
                        <h1>{filme.title}</h1>
                        <hr/>
                        <p>{filme.overview}</p>
                        <p>Polularidade: {filme.popularity}</p>
                        <p>Lançamento: {filme.release_date}</p>
                        <p>Gênero:  
                            {filme.genres.map(genero => (
                                <span key={genero.id}> {genero.name} | </span>                        
                            ))}
                        </p>
                        <p>Empresas: 
                            {filme.production_companies.map(company => (
                                <span key={company.id}>  |  

                                    {
                                        company.logo_path &&
                                        <img height="30px" src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} alt={company.name} title={company.name}/>                     
                                    } 
                                    {
                                        !company.logo_path && <span>{company.name} </span>
                                    }
                                       
                                </span>
                            ))}
                        </p>
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

                <h1>Capas e Posters</h1>
                {
                    imagens.id &&
                    <Row className="mt-4">
                        {imagens.posters.map((imagem, i) => (
                            <React.Fragment key={i}>
                                {imagem.file_path  &&
                                    <Col md={1}>
                                        <Card >
                                            <Card.Img variant="top"
                                            src={`https://image.tmdb.org/t/p/w500/${imagem.file_path}`}/>                     
                                        </Card>
                                    </Col>
                                }                      
                            </React.Fragment>
                        ))}
                    </Row>
                }
                <hr/>

                <h1>Contra-capas</h1>
                {
                    imagens.id &&
                    <Row>
                        {imagens.backdrops.map((imagem, i) => (
                            <React.Fragment key={i}>
                                {imagem.file_path  &&
                                    <Col md={2}>
                                        <Card >
                                            <Card.Img variant="top"
                                            src={`https://image.tmdb.org/t/p/w500/${imagem.file_path}`}/>                     
                                        </Card>
                                    </Col>
                                }                      
                            </React.Fragment>
                        ))}
                    </Row>
                }

                <hr/>

                <h1>Atores</h1>
                {creditos.id &&
                    <Row>
                        {creditos.cast.map(ator => (
                            <React.Fragment key={ator.id}>
                                {ator.profile_path  &&
                                    <Col md={1}>
                                        <Link to={`/atores/${ator.id}`}>
                                            <Card title={`${ator.character}(${ator.name})`}>
                                                <Card.Img variant="top"
                                                src={`https://image.tmdb.org/t/p/w500/${ator.profile_path}`}/>                     
                                            </Card>
                                        </Link>

                                    </Col>
                                }                       
                            </React.Fragment>
                        ))}
                    </Row>
                
                }
                <hr/>

                <Button className="btn btn-dark mb-3" onClick={()=> props.history.goBack()}> 
                        <FaRegHandPointLeft/> Voltar
                </Button>

            </>
            }
        </>
    )
}

export default FilmesDetalhes
