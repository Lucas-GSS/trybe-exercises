import React from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '', savedEmail:'' }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ email: value })
  }

  handleSubmit = () => {
    const { email } = this.state
    this.setState({ savedEmail: email, email: '' })
  }

  render() {
    const { email, savedEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="email-id">
          Email:
          <input type="email" id="email-id" onChange={ this.handleChange } value={ email } />
        </label>
      <input type="button" data-testid="send-button" value="Salvar" onClick={ this.handleSubmit } />
      <input type="button" value="Voltar" />
       
       <ValidEmail email={ savedEmail } />
      </div>
    );
  }
}

export default App;
