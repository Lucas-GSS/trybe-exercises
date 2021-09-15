import React from 'react';

class TextArea extends React.Component {
  render() {
    const {handleChange} = this.props
    return(
      <label for='text-area'>
        <textarea id='text-area' maxLength='80' placeholder='Justifique' name='texto' onChange={handleChange}>
        </textarea>
    </label>
    );
  }
}

export default TextArea;