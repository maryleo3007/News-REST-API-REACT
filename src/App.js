import React, { Component } from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Buscador from './components/Buscador';

class App extends Component {
  state = {
    noticias : []
  }

  componentDidMount() {
    this.consultarApi();
  }

  consultarApi = (categoria ='general') => {
    const api = '472b73ad80174cd3b4f768ed92a79575';
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${api}`;

    fetch(url)
    .then( response =>{
      return response.json()
    })
    .then( datos => {
      this.setState({
        noticias : datos.articles
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Header 
          titulo = "Noticias"
        />
        <div className="container white contenedor-noticias ">
           <Buscador 
              enviarFormulario = {this.consultarApi}
           />
           <Noticias 
              noticias =  {this.state.noticias}
           />
        </div>
        
      </div>
    );
  }
}

export default App;
