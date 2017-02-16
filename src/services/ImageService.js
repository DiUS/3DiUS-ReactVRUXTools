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
  }
}

export default ImageService;
