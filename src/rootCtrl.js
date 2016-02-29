angular.module('emporium')
.controller('rootCtrl', function( $scope, itemService ) {


	$scope.addItem = function( newItem ) {
		itemService.addItem( newItem )
		$scope.getItems();
	}
	
	$scope.getItems = function() {
		$scope.items = itemService.getItems();
	}
	$scope.getItems();

});