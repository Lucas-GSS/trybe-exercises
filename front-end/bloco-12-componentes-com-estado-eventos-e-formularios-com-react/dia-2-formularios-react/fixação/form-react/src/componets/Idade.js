import React from 'react';

class Idade extends React.Component {
  render() {
    const {handleChange} = this.props;
    return (
      <label for='idade'>
        Idade:
        <input type='number' id='idade' name='idade' onChange={handleChange}/> 
      </label>
    );
  }
}

export default Idade;