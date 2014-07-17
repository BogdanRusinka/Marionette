var AppLayoutView = Backbone.Marionette.LayoutView.extend({
  template: "#layout-view-template",
  regions: {
  	content: "#app"
  }
});

container = new Backbone.Marionette.Region({
  el: "#container"
});

var layoutView = new AppLayoutView();
container.show(layoutView);
layoutView.content.show(showFilmList);
