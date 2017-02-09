import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VRScene from './components/VRScene.js'

class App extends Component {

  render () {
    return (
      <div>
        <VRScene/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.scene-container'));
