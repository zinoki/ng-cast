angular.module('video-player')
  .service('youTube', function($http) {
    this.getYoutube = function(options, callback) {
      return $http({
        method: 'GET',
        url: ''
      });
    };
  });
