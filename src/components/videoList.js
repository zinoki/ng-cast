angular.module('video-player')
  .component('videoList', {
    templateUrl: '/src/templates/videoList.html',
    bindings: {
      videos: '<'
    },
    controller: function() {
      // this.videos = $window.exampleVideoData;
      //debugger
    }
  });
