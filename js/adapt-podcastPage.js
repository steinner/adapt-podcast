define([
  'core/js/adapt',
  'core/js/views/componentView',
  'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

  const podcastPageView = ComponentView.extend({
    postRender: function() {
      this.setReadyStatus();
      this.setupInviewCompletion();
      this.colorYellow();
    },

    colorYellow: function(){
      this.$el[0].parentNode.parentNode.parentNode.classList.add('amarelo');
    }
  });

  const podcastPageModel = ComponentModel.extend({
    // Implement your component model
  });

  return Adapt.register('podcastPage', {
    model: podcastPageModel,
    view: podcastPageView
  });

});
