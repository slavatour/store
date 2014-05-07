$(document).ready(function () {
	
	App.Models.LanguageModel = Backbone.Model.extend({
		defaults: {
			country: '',
			iso: '',
			iso_rigion: ''
		}
	});

});