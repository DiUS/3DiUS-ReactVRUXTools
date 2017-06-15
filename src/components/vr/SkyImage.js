import React, { Component } from 'react';

export default class SkyImage extends Component {
  constructor(props) {
    super(props);
    this.state = { imageData: null };
  }

  render() {
    return <a-sky src="background.png" rotation="0 0 0"/>
  }
}

