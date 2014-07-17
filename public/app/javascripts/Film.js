var Film = Backbone.Model.extend({
	defaults:{
		year: 2014,
		name: '',
		id: undefined,
		details0: "First",
		details1: "Second"
	}
});

var filmModel = new Film();