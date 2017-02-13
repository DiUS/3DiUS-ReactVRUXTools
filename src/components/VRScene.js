import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-html-shader'
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import Camera from './Camera';
import Sky from './Sky';

export default class VRScene extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red', image: ''};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    var skyImg = localStorage.getItem('sky');

    return (
          <Scene>
            <a-assets>
              <img id="sky" src={skyImg} />
            </a-assets>

            <Camera>
              <a-cursor
                animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
              </a-cursor>
            </Camera>

            <a-cylinder position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D" rotation="" scale="" visible="" material="" geometry=""></a-cylinder>
            <a-sky src={skyImg} />

          </Scene>
    );
  }
}
