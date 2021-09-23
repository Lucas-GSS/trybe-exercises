import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
    console.log('constructor');
  }
  // Primeiro passo para renderizar as piadas: utilizar o componentDidMount para fazer a rqeuisição à API. Além disso ela seta o state loading que serve como condição para renderizar um elemento no render();
  async fetchJoke() {
    this.setState({loading: true})
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchJoke();
    console.log('didMount');
  }
  //Segundo passo, salvar no state a nova piada recebida
  saveJoke() {
    this.setState(({storedJokes, jokeObj}) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    console.log('render');
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span> 
      {loading ? loadingElement : this.renderJokeElement()} {/* terceiro passo: Renderização condicional. Na primeira execução de fectJoke, o state loading estará true, portanto renderiza o loading element e ao final da fetchJoke ela seta loading para false, renderizando assim o retorno de renderJokeElement() */}
      </div>
    );
  }
}

export default DadJoke;
