var PlaylistsView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    console.log("playlistsview exists");
    this.addPlaylistView = new AddPlaylistView();
    console.log(this.addPlaylistView, "from PlaylistsView");
    this.collection.on('all', this.render, this);
    this.listenTo(this.addPlaylistView, 'all', function(name) {
      console.log("heard addPlaylist");
      this.collection.add(new PlaylistModel({name: name}));
    });
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<h3>Playlists</h3>')
      .append(this.addPlaylistView.render())
      .append(
        this.collection.map(function(playlistModel) {
          return new PlaylistView({model: playlistModel}).render();
        }
      )
    );
  }
});
