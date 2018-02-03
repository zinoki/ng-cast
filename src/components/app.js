angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($window) {
      this.videos = $window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.params = {
        q: null,
        key: window.YOUTUBE_API_KEY,
        maxResults: 5
      };
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
        console.log(index);
      };
      this.searchVideos = (currentSearch) => {
        this.params.q = currentSearch;
        console.log(this.params.q);
      };
      
      this.callBack = () =>{
      
      };
      
      // youTube( )
    }
  });