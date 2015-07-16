// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function(e) {
      if(e.target.classList[0]=== 'Upvote'){
        this.model.votes++;
        this.render();
      }else if(e.target.classList[0] === 'Downvote'){
        this.model.votes--;
        this.render();
      } else {
        this.model.enqueue();
      }
    }
  },

  render: function(){
    return this.$el.html(this.model.votes +'<span><img class="Upvote" src="images/Upvote.png"></span><span><img class="Downvote"src="images/Downvote.png"></span>' + this.template(this.model.attributes) + '<td>' + this.model.numPlays + '</td>');
  }

});
