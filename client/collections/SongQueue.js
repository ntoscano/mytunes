// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  currentIndex : 0,

  initialize: function(){
    this.on('add', function(){
      if(this.length===1){
        this.playFirst();
      }
    });
    this.on('dequeue', function(song){
      this.dequeue();
    }, this);

    this.on('ended', function(song){
      this.ended();
    }, this);

  },

  playFirst: function(){
    this.at(0).play();
  },

  dequeue: function(){
    this.remove(this.first());

  },

  ended: function(){
    this.remove(this.at(0));
    if(this.first()){
      this.playFirst();
    }
  },
});