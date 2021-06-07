import React from 'react';

class HornedBeasts extends React.Component{
  render(){
    return (
      <div>
        <h2 className='title'>title:{this.props.title}</h2>
        <img src={this.props.url} alt={this.props.description} title={this.props.title}></img>
        <p className='description'>description:{this.props.description}</p>
      </div>
    );
  }
}
export default HornedBeasts;
