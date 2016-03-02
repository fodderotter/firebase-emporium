angular.module('emporium', ['ui.router', "firebase"])

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

})
.constant("firebaseUrl", {
	ref:"https://myemporium.firebaseio.com/"
});