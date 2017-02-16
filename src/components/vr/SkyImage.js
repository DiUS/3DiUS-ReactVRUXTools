import React, { Component } from 'react';
import TransformService from '../../services/TransformService'

export default class SkyImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <a-sky src="#sky" rotation="0 -90 0"/>
  }
}

