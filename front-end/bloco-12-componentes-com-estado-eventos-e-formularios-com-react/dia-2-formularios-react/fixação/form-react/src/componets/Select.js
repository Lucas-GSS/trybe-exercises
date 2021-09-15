import React from 'react';

class Select extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label for='select'>Estado Favorito:
            <select id='select' name='estado' 
            value={value} //Colocando como valor inicial o definido no estado inicial, quando chama a função troca o valor pelo do alvo do evento 
            onChange={handleChange}> 
              <option value='MG'>Minas Gerais</option>
              <option value='RS'>Rio Grande do Sul</option>
              <option value='SC'>Santa Catarina</option>
              <option value='PR'>Paraná</option>
            </select>
      </label>
    );
  }
}

export default Select;