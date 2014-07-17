var CompositeView = Backbone.Marionette.CompositeView.extend({
	el : "#app",
	template: '#new-film-template',

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
			name : ui.name.val(),			
			year : ui.year.val()
		}
		var id = films.last().id+1;
		films.add({id : id, name : data.name, year : "("+data.year+")"});
		ui.name.val("");
		ui.year.val("");
	}
});

var showFilmList = new CompositeView({
	model : filmModel,
	collection : films
});