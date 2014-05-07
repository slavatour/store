$(document).ready(function () {
	
	App.Collections.LanguagesCollection = Backbone.Collection.extend({
		model: App.Models.LanguageModel
	});

});