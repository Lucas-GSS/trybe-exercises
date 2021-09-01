import React from 'react';

import PropTypes from 'prop-types';


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.poke
    return (
      <section className='poke'>
        <p>Name: {name}</p>
        <p>Type:{type}</p>
        <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={name}/>
      </section>
    );
  }
}

PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
});
export default Pokemon;