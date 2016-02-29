angular.module('emporium')
.controller('rootCtrl', function( $scope, itemService ) {

	$scope.formShow = false;


	$scope.addItem = function( newItem ) {
		itemService.addItem( newItem )
		$scope.getItems();
		$scope.formShow = false;
	}
	
	$scope.getItems = function() {
		$scope.items = itemService.getItems();
	}
	$scope.getItems();

});