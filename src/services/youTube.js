angular.module('video-player')
  .service('youTube', function($http) {
    this.getYoutube = function(params, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {key: window.YOUTUBE_API_KEY} // think about this
      }).then(function successCallback(data) {
        console.log('Good Request', data);
        callback(response);
      }, function errorCallback(response) {
        console.log('Bad Request!!!!!');
      });
    };
  });


