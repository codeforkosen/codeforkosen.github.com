$(function() {
  var ListView = Backbone.View.extend({ 
    el: $('body'),

    events: {
      'click .event-eyecatch span':    'toggleEventDetail'
    },

    initialize: function(){
      _.bindAll(this, 'render','toggleEventDetail');
      this.render();
    },

    render: function(){
    },
    toggleEventDetail: function(e) {
      $(e.currentTarget).parent().next("div.event-info").toggle(100);
    }
  });
  var listView = new ListView();

});

