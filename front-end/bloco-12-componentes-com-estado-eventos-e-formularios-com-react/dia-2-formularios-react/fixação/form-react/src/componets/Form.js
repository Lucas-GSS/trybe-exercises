import React from 'react';
import Select from './Select';
import TextArea from './TextArea';
import Name from './Name';
import Idade from './Idade'
import Email from './Email';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      idade: 0,
      email: '',
      estado: 'MG',
      texto: '',
      rockeiro: false,
      erroNome: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // Event handler genérico, que permite controlar o estado de todos o componentes pertencentes à classe
  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; //Checkbox não possui value, seu valor está atrelado a propriedade checked
    this.setState(() =>({
      [name]: value,
    }))
  }
  
  render() {
    return (
      <form className='form'>
        <fieldset>
          <legend>Informações</legend>
          <Name handleChange={this.handleChange} /> 
          <br/> <br/>

          <Idade handleChange={this.handleChange} />
          <br/> <br/>

          <Email handleChange={this.handleChange} />
          <br/> <br/>

          <Select value={this.state.estado} handleChange={this.handleChange} />
          <br/> <br/>

          <TextArea handleChange={this.handleChange} />
          <br/> <br/>

          <label for='checkbox'> Curte Rock?
            <input type='checkbox' id='checkbox' name='rockeiro' onChange={this.handleChange}/>
          </label>

        </fieldset>
        <button>Enviar</button>
      </form>
    );
  }
}

export default Form;