var PlaylistView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.model.collection.on('all', this.render, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>' + this.model.get('name') + '</th>').append(
      this.model.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
