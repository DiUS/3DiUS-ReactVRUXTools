import $ from 'jquery';

const TransformService = {

  getTransform(callback) {
    $.ajax({
      url: '/transform',
      type: 'GET',
      success: (data) => {
        callback(data);
      }
    });
  },

  postTransform(data, callback) {
    $.ajax({
      url: '/transform',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({data}),
      success: (data) => {
        callback();
      }
    });
  }
}

export default TransformService;
