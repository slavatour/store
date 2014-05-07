$(document).ready(function () {
	
	//heiper for template in model view
	var template = function (id) {
		return _.template($('#'+ id).html());	
	};

	App.Views.LanguageView = Backbone.View.extend({
		tagName: 'li',
		className: 'lng',
		template: template('languages-template'),

		render: function () {
			var template = this.template(this.model.toJSON());
			this.$el.html(template);
			return this;
		}
	});

});