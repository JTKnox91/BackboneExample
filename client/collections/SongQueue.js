// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.onAdd);
    this.on('ended', this.onEnded);
    this.on('dequeue', this.dequeue);
  },

  playFirst: function() {
    this.at(0).play();
  },

  onAdd: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  onEnded: function() {
    this.shift();
    if (this.length !== 0) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    this.remove(song);
  },

  enqueuePlaylist: function(playlist) {
    this.reset();
    playlist.each(song, function(song) {
      this.add(song);
    }, this);
  }

});