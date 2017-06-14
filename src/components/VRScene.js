import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-html-shader'
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import Camera from './Camera';
import SkyImage from '../components/vr/SkyImage';
import MenuImage from '../components/vr/MenuImage';

export default class VRScene extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Scene>
        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
          </a-cursor>
        </Camera>

        <SkyImage/>
        <MenuImage/>
        </Scene>
    );
  }
}
