import React, { Component } from 'react';

export default class MenuImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: '1 1 1',
      imageData: null
    };
  }

  render() {
    return (
      <a-curvedimage radius="4" theta-length="360" height="12" scale={this.state.scale} src="ui.png"></a-curvedimage>
    );
  }
}


