var Film = Backbone.Model.extend({
	defaults:{
		year: 2014,
		name: '',
		id: undefined
	}
});

var filmModel = new Film();