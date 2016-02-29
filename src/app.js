angular.module('emporium', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
		.state('home', {
			  url: '/'
			, templateUrl: './views/landingPage.html'
			, controller: 'rootCtrl'
		})
		.state('shop', {
			  url: '/shop'
			, templateUrl: './views/shop.html'
			, controller: 'rootCtrl'
		})
		.state('admin', {
			  url: '/admin'
			, templateUrl: './views/admin.html'
			, controller: 'rootCtrl'
		});

	$urlRouterProvider.otherwise('/');

});