var AddPlaylistView = Backbone.View.extend({

  tagName: "form",

  initialize: function() {
    this.render();
    console.log(this, "from AddPlaylistView");
  },

  events: {
    'click .button': function() {
      debugger;
      this.trigger('addPlaylist', $el.find('#PlaylistName').val());
    }
  },

  render: function() {
    return this.$el.html("<input id='PlaylistName' type='text'><button class='button'>Submit</button>");
  }

})