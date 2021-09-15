import React from 'react';

class Email extends React.Component {
  render() {
    const {handleChange} = this.props;
    return(
      <label for='email'>E-mail:
        <input type='email' id='email' name='email' onChange={handleChange}/>
      </label>
    );
  }
}

export default Email;