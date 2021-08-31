import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <section className='App'>
       <img src={this.props.album.image} alt={this.props.title}/>
       <h3>{this.props.album.title}</h3>
       <p>Lançamento: {this.props.album.releaseDate.year}</p>
       <p>Gravadora: {this.props.album.others.company}</p>
       <p>Formatos: {this.props.album.others.formats}</p>
      </section>
    );
  }
}
export default Section;