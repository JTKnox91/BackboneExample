var PlaylistCollection = Songs.extend({
  
  model: SongModel,

  initialize: function() {
    this.on('add', this.onAdd);
  },

  playAll: function() {
    this.trigger('startPlaylist', this);
  }

});