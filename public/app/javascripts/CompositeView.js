var CompositeView = Backbone.Marionette.CompositeView.extend({
	className: "layout",
	template: '#app-template',

	childView: FilmView,

	childViewContainer: ".films",
	
	events : {
		"click .add-button" : "addFilm"
	},

	ui : {
		name : ".new-film-name",
		year : ".new-film-year"
	},

	addFilm : function(){
		var data = {
			name : this.ui.name.val(),			
			year : this.ui.year.val()
		}
		var id = films.last().id+1;
		films.add({id : id, name : data.name, year : "("+data.year+")"});
		this.ui.name.val("");
		this.ui.year.val("");
	}
});

var showFilmList = new CompositeView({
	model : filmModel,
	collection : films
});