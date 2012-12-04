$(function() {

  var App = function() {
    this.initialize();
  };

  _.extend(App.prototype, Backbone.Events, {
    
    player: null,

    initialize: function() {
      this.player = new PlayerView({
        el: '#player'
      });
      this.picker = new SquareView({
        el: '#picker'
      });
      this.submit = new SquareView({
        el: '#submit'
      });

      this.player.render();
      this.picker.render();
      this.submit.render();
    }
  });

  window.app = new App();

});

var SquareView = Backbone.View.extend({
  initialize: function(opt) {
    Backbone.View.prototype.initialize.call(this, opt);
    console.log(this.el);
  },

  render: function() {
    var side = this.getSquareSide(10);
    this.$el.css({width: side, height: side});
  },

  getSquareSide: function(wRatio) {
    return document.width * wRatio/100;
  }
});

var PlayerView = SquareView.extend({

});