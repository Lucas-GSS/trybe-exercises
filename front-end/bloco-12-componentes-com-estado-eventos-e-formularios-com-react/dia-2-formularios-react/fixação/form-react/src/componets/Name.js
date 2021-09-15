import React from 'react';

class Name extends React.Component {
  render() {
    const {handleChange} = this.props
    return(
      <label for='nome'>
        Nome:
        <input type='text' id='nome' name='nome' onChange={handleChange} /* Componente controlado, pois seu valor está sendo gerenciado pelo Componente que o renderiza */ /> 
      </label>
    );
  }
}

export default Name;