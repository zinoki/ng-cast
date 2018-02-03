angular.module('video-player')
  .component('videoListEntry', {
    templateUrl: '/src/templates/videoListEntry.html',
    bindings: {
      item: '<'
    },
    controller: function() {
      // console.log("Entry", this.item)
    }
  });
