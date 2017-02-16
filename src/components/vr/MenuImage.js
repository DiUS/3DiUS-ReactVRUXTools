import React, { Component } from 'react';
import TransformService from '../../services/TransformService'

export default class MenuImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '0 0 0',
      rotation: '0 0 0',
      scale: '1 1 1'
    };
    this._setInitialState = this._setInitialState.bind(this);
  }

  componentDidMount() {
    TransformService.getTransform(this._setInitialState)
  }

  _setInitialState(data)
  {
    var response = JSON.parse(data);
    this.setState({
      position: response.position,
      rotation: response.rotation,
      scale: response.scale
    })
  }

  render() {
    return (
      <a-image position={this.state.position} rotation={this.state.rotation} scale={this.state.scale} src="#menu"></a-image>
    );
  }
}


