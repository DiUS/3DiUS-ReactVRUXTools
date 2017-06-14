import React, { Component } from 'react';
import TransformService from '../../services/TransformService'
import ImageService from '../../services/ImageService'

export default class MenuImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: '1 1 1',
      imageData: null
    };
    this._setInitialState = this._setInitialState.bind(this);
    this._setImage = this._setImage.bind(this);
  }

  componentDidMount() {
    ImageService.getImage('ui', this._setImage);
    TransformService.getTransform(this._setInitialState)
  }

  _setImage(data)
  {
    this.setState({imageData: data})
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
      <a-curvedimage radius="4" theta-length="360" height="12" scale={this.state.scale} src={this.state.imageData}></a-curvedimage>
    );
  }
}


