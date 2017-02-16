import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-html-shader'
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import Camera from './Camera';
import Sky from '../components/Sky';
import Menu from '../components/Menu';

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

        <Sky/>
        <a-sky src="#sky" rotation="0 -90 0"/>

        <Menu/>
        <a-image position="0 0 -2" src="#menu" scale="1.5 1.5 1"></a-image>
      </Scene>
    );
  }
}
