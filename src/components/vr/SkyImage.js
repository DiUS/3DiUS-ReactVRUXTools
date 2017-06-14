import React, { Component } from 'react';
import ImageService from '../../services/ImageService'

export default class SkyImage extends Component {
  constructor(props) {
    super(props);
    this.state = { imageData: null };
    this._setImage = this._setImage.bind(this);
  }

  componentDidMount() {
    ImageService.getImage('background', this._setImage);
  }

  _setImage(data)
  {
    this.setState({imageData: data})
  }

  render() {
    return <a-sky src={this.state.imageData} rotation="0 0 0"/>
  }
}

