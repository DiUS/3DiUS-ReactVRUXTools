import React, { Component } from 'react';
import TransformService from '../../services/TransformService'

export default class MenuTransform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '0 0 0',
      rotation: '0 0 0',
      scale: '1 1 1',
      uploaded: false
    };
    this._changePosition = this._changePosition.bind(this);
    this._changeRotation = this._changeRotation.bind(this);
    this._changeScale = this._changeScale.bind(this);
    this._setInitialState = this._setInitialState.bind(this);
    this._onSavedTransform = this._onSavedTransform.bind(this);
    this._handleSave = this._handleSave.bind(this);
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

  _handleSave(e) {
    e.preventDefault();

    var data = {
      position: this.state.position,
      rotation: this.state.rotation,
      scale: this.state.scale
    }

    let that = this;

    TransformService.postTransform(data, this._onSavedTransform)
  }

  _onSavedTransform()
  {
    this.setState({uploaded: true});
    setTimeout(() => { this.setState({uploaded: false }); }, 3000);
  }

  _changePosition(e) {
    this.setState({ position: e.target.value });
  }

  _changeRotation(e) {
    this.setState({ rotation: e.target.value });
  }

  _changeScale(e) {
    this.setState({ scale: e.target.value });
  }

  render() {

    let uploadString = this.state.uploaded ? 'Much success!' : '';

    return (
      <div> 
        <form>
          <div>All fields take 3 floats/ints with spaces between : '3.1 2 1.6'</div>
          <br/>
          <div className="formColumn">Position</div>
          <div><input type="text" name="position" placeholder="Position eg '0 0 -5'" onChange={(e)=>this._changePosition(e)} value={this.state.position} /></div>
          <br/>
          <div className="formColumn">Rotation</div>
          <div><input type="text" name="rotation" placeholder="Rotation eg '0 180 0'" onChange={(e)=>this._changeRotation(e)} value={this.state.rotation} /></div>
          <br/>
          <div className="formColumn">Scale</div>
          <div><input type="text" name="scale" placeholder="Scale eg '1.5 1.5 1'" onChange={(e)=>this._changeScale(e)} value={this.state.scale} /></div>
          <br/>
          <button type="button" onClick={(e)=>this._handleSave(e)}>Save</button>
        </form>
        <p>{uploadString}</p>
      </div>
    );
  }
}

