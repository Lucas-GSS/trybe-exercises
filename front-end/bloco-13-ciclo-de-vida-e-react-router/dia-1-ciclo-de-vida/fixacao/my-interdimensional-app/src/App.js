import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {characters: []}
  }

  fetchApi = async() => {
    const request = await fetch('https://rickandmortyapi.com/api/character')
    const jsonRequest = await request.json();
    this.setState({characters: jsonRequest.results})
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    const { characters } = this.state
    const loading = <p>Loading....</p>
    return (
      <div className="App">
        <h1>Rick and Morty Characters</h1>
        { characters.length === 0 ? loading :
          characters.map(({name, image}) => {
            return(
              <div key={name}>
                <h3>{ name }</h3>
                <img src={ image } alt={ name } />
              </div>
            );
        })}
      </div>
    );
  }
}

export default App;
