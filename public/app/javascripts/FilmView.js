var FilmView = Backbone.Marionette.ItemView.extend({
	className: "film-container",
  	
  	template: "#film-template",

	ui : {
		text : ".edit" 
	},


	initialize: function(){
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.render);
	},

	events : {
		"click .remove-button"  : "deleteFilm",
		"click .film-name" 		: "details",
		"dblclick .film-name"   : "editFilmName",
		"keypress .edit"		: "updateFilmName",
		"blur .edit"			: "close"
	},

	deleteFilm: function(){
		this.model.destroy();
	},

	editFilmName: function(){
		this.$el.addClass("editing");
      	this.ui.text.focus();
	},

	updateFilmName: function(evt){
		if (evt.keyCode == 13) this.close();
	},

	close: function(){
		var value = this.ui.text.val();
		this.model.set({name: value});
		Backbone.sync("update",this.model);
		this.$el.removeClass("editing");
	},

	details : function(){
		layoutView.content.show(new DetailsView({model:this.model}));
		//Backbone.trigger("detailsEvent", this.model);
	}
});