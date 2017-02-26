import React, { Component } from 'react';
import ImageService from '../../services/ImageService'

export default class SpheremapUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      fileName: '',
      imagePreviewUrl: '/images/spheremap.png',
      uploaded: false
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
    this._onSavedImage = this._onSavedImage.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append('uploads[]', this.state.file, "spheremap.png");
    ImageService.postImage(formData, this._onSavedImage)
  }

  _onSavedImage()
  {
    this.setState({uploaded: true});
    setTimeout(() => { this.setState({uploaded: false }); }, 3000);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    let fileName = file.name;

    let splitName = fileName.split(".").slice(-1)[0]
    if(splitName.toLowerCase() != "png")
    {
      alert("Upload only PNG files");
      return;
    }
    else {
      reader.onloadend = () => {
        this.setState({
          file: file,
          fileName: fileName,
          imagePreviewUrl: reader.result,
          uploaded: false
        });
      }
      reader.readAsDataURL(file)
    }
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    let uploadString = this.state.uploaded ? 'Much success!' : '';
 
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <h4>Background Image</h4>
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} accept="image/x-png"  />
          <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="spheremapPreview">
          {$imagePreview}
        </div>
        <p>{uploadString}</p>
      </div>
    )
  }
}

