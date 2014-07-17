var DetailsView = Backbone.Marionette.ItemView.extend({
	
	className: "details-container",
  	
  	template: "#details-template",
  	
  	events: {
  		"click .back-home" : "backHome"
  	},

  	backHome: function(){
  		layoutView.content.show(new CompositeView({model : filmModel, collection : films}));
  	}

});
