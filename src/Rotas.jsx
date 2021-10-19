import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Arrays from './pages/Arrays';
import AtoresDetalhes from './pages/atores/AtoresDetalhes';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import FilmesNowPlaying from './pages/filmes/FilmesNowPlaying';
import FilmesPopulares from './pages/filmes/FilmesPopulares';
import FilmesTopRated from './pages/filmes/FilmesTopRated';
import FilmesUpcoming from './pages/filmes/FilmesUpcoming';
import HelloWorld from './pages/HelloWorld';
import Objetos from './pages/Objetos';
import Orion from './pages/Orion';
import PaginaInicial from './pages/PaginaInicial';
import States from './pages/States';
const Rotas = () => {
    return (
        <Switch>
          <Route exact path="/" component={FilmesPopulares} />             
          <Route exact path="/hello-world" component={HelloWorld}/>           
          <Route exact path="/inicial" component={PaginaInicial}/>            
          <Route exact path="/page2" component={Orion}/>       
          <Route exact path="/Arrays" component={Arrays}/>     
          <Route exact path="/Objetos" component={Objetos}/>    
          <Route exact path="/States" component={States}/> 
          <Route exact path="/Filmes/Populares" component={FilmesPopulares}/> 
          <Route exact path="/Filmes/TopRated" component={FilmesTopRated}/> 
          <Route exact path="/Filmes/NowPlaying" component={FilmesNowPlaying}/> 
          <Route exact path="/Filmes/Upcoming" component={FilmesUpcoming}/> 
          <Route exact path="/filmes/:id" component={FilmesDetalhes}/> 
          <Route exact path="/atores/:id" component={AtoresDetalhes}/> 
          
        </Switch>
    )
}

export default Rotas
