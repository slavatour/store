var Router = Backbone.Router.extend({
	routes: {
		''			: 			"index", 
		'photo'		:			"photo",
		'product'	:			"product"
	},

	initialize: function () {
		Backbone.history.start();
	},

	index: function () {
		$('.routesDiv').removeClass('visible').addClass('hide');
		$('.index-container').removeClass('hide').addClass('visible');	
	},

	photo: function () {
		$('.routesDiv').removeClass('visible').addClass('hide');
		$('.category-container').removeClass('hide').addClass('visible');

	},

	product: function () {
		$('.routesDiv').removeClass('visible').addClass('hide');
		$('.product-list').removeClass('hide').addClass('visible');		
	}
});