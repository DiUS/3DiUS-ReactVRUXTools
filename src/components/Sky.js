import React, { Component } from 'react';

export default class Sky extends Component {

  constructor(props) {
    super(props);
    this.state = {image: ''};
  }

  changeImage(newImage) {
    this.setState({ image: newImage });
  }

  render () {
    return <a-sky src={this.props.srcImage} />
  }
}

