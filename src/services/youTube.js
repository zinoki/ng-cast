angular.module('video-player')
  .service('youTube', function($http) {
    this.getYoutube = function(params, callback) {
      return $http({
        method: 'GET',
        url: params,
      }).then(function successCallback(response) {
        console.log('Good Request', response.data.items);
        callback(response.data.items);
      }, function errorCallback(response) {
        console.log('Bad Request!!!!!');
      });
    };
  });


