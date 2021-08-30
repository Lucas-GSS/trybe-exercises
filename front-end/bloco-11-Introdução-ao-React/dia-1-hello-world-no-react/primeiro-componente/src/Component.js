import React from 'react'; // Importa o React pra o arquivo
import './App.css'; // Importa op arquivo CSS
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1 className='App'>Olá mundo, aqui é o Lucas!</h1>
        <p className='App'>Sou estudante de desenvolvimento Web na Trybe.</p>
      </div>
    )
  }
}

export default Hello; // Usado para exportar apenas um arquivo