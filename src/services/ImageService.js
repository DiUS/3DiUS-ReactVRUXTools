import $ from 'jquery';

const ImageService = {

  postImage(formData, callback) {
    $.ajax({
      type: 'POST',
      url: '/store',
      contentType: false,
      processData: false,
      data: formData,
      success: () => {
        callback();
      }
    })
  },

  getImage(name, callback) {
    callback('https://s3-ap-southeast-2.amazonaws.com/3dius-sketch-to-vr/' + name + '.png');
  }
}

export default ImageService;

