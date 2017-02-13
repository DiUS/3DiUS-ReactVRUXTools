import React, { Component } from 'react';
import JsonWriter from '../utils/json_writer';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewData: '',
      imagePreviewName: '',
      imageOldName: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {

      let oldName = this.state.imagePreviewName;
      this.setState({
        file: file,
        imagePreviewData: reader.result,
        imagePreviewName: file.name,
        imageOldName: oldName
      });

      JsonWriter.write_settings(reader.result)

    }

    reader.readAsDataURL(file)
  }

  render() {
    var uploadedText = this.state.imagePreviewNam
      return (
        <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        { uploadedText }
      </div>
    )
  }

}
