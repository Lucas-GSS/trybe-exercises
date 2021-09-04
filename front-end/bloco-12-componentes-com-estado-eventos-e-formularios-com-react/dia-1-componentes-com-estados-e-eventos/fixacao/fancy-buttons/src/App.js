import React from 'react';

class App extends React.Component {
  // função que todo componente criado executa, tem a lógica interna do React para o funcionamento dos componentes. Aqui acessamos ela para adicionar a lógica que desejamos. Usamos o super() para que o constructor nativo do React execute primeiro.
  constructor()  {
    super()
    this.handleClick = this.handleClick.bind(this); // Vinculando minha função ao this

    // Para trabalhar com eventos e estados juuntos, primeiro acessar a chave state do this e atribuir um objeto para garudar as info desejadas
    this.state = {
      numeroCliques: 0,
    }
  }
  // Minha função
  handleClick(event) {
    event.target.style.backgroundColor = 'green';
    event.target.style.color= 'white';

    // Para modificar as info do estado usa-se o this.setState(). JAMAIS ATRIBUIR VALOR DIRETAMENTE AO STATE, React faz isso de forma assincrona, para garantir que ocorra na ordem certa pegamos o estado anterior da chave e adicionamos o que queremos. setState recebe 2 parâmetros, estado anterior do componente e props, que no caso abaixo não ta sendo usada como indica o underline

    this.setState((estadoAnterior, _props) => ({
      numeroCliques: estadoAnterior.numeroCliques + 1
    }));
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.numeroCliques}</button> // Dizendo explicitamente pro React que quero acessar a função dentro da minha classe
    );
  }
}

export default App;
// Se você definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...} , você não precisará fazer o bind no constructor, mas sua aplicação será menos performática! Se quiser ler mais a respeito, busque o texto "Binding vs arrow-function (for react onClick event)" nos Recursos Adicionais!
