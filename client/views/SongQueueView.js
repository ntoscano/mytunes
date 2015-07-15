// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "queue",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>');
    return this.$el;
  }

});
