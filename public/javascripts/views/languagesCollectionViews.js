$(document).ready(function () {
	
	App.Views.LanguagesView = Backbone.View.extend({
		tagName: 'ul',
		render: function () {
			this/collection.each(this.viewLng, this);
			return this;
		},

		viewLng: function (lng) {
			var lngView = App.Views.LanguageView({model:lng});
			this.$el.append(lngView.render().el);
		}
	});

});