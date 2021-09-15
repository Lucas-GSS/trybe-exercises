import React from 'react';

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
          <label for='nome'>
            Nome:
            <input type='text' id='nome' name='nome' onChange={this.handleChange} /* Componente controlado, pois seu valor está sendo gerenciado pelo Componente que o renderiza */ /> 
          </label>
          <br/> <br/>

          <label for='idade'>
            Idade:
            <input type='number' id='idade' name='idade' onChange={this.handleChange}/> 
          </label>
          <br/><br/>

          <label for='email'>E-mail:
            <input type='email' id='email' name='email' onChange={this.handleChange}/>
          </label>
          <br/> <br/>

          <label for='select'>Estado Favorito:
            <select id='select' name='estado' 
            value={this.state.estado} //Colocando como valor inicial o definido no estado inicial, quando chama a função troca o valor pelo do alvo do evento 
            onChange={this.handleChange}> 
              <option value='MG'>Minas Gerais</option>
              <option value='RS'>Rio Grande do Sul</option>
              <option value='SC'>Santa Catarina</option>
              <option value='PR'>Paraná</option>
            </select>
          </label>
          <br/> <br/>

          <label for='text-area'>
            <textarea id='text-area' maxLength='80' placeholder='Justifique' name='texto' onChange={this.handleChange}>
            </textarea>
          </label>
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