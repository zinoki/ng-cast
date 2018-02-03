angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    // bindings: {
    //   videos: '<'
    // },
    controller: function($window) {
      this.videos = $window.exampleVideoData;
      console.log("videos", this.videos);
    }
  });
