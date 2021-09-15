import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {nome: ''}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({target}) {
    this.setState(() =>({[target.name]: target.value}))
  }
  render() {
    return (
      <form className='form'>
        <fieldset>
          <legend>Informações</legend>
          <label for='nome'>
            Nome:
            <input type='text' id='nome' name='nome' onChange={this.handleChange}/>
          </label>
          <br/> <br/>

          <label for='estado'>
            Idade:
            <input type='number' id='estado' name='estado'/> 
          </label>
          <br/><br/>

          <label for='email'>E-mail:
            <input type='email' id='email'/>
          </label>
          <br/> <br/>

          <label for='select'>Estado Favorito:
            <select id='select'> 
              <option value='MG'>Minas Gerais</option>
              <option value='RS'>Rio Grande do Sul</option>
              <option value='SC'>Santa Catarina</option>
              <option value='PR'>Paraná</option>
            </select>
          </label>
          <br/> <br/>

          <label for='text-area'>
            <textarea id='text-area' maxLength='80' placeholder='Justifique'>
            </textarea>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;