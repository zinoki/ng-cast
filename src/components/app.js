angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($window, youTube) {
      this.videos = $window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.params = '';
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
      this.callBack = (data) => {
        this.videos = data;
      };
      this.searchVideos = (currentSearch) => {
        this.params = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${currentSearch}&key=${window.YOUTUBE_API_KEY}`;
        youTube.getYoutube(this.params, this.callBack);
      };
      
    }
  });