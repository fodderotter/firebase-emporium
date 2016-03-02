angular.module('emporium')
.controller('rootCtrl', function( $scope, firebaseUrl, $firebaseArray ) {

	var itemsRef = new Firebase(firebaseUrl.ref + "items");

	$scope.items = $firebaseArray(itemsRef);

	$scope.formShow = false;


	$scope.addItem = function( newItem ) {
		itemService.addItem( newItem )
		$scope.getItems();
		// $scope.formShow = false;
	}
	
	$scope.getItems = function() {
		$scope.items = itemService.getItems();
	}
	// $scope.getItems();

	// $scope.items.forEach(function(item) {
	// 	$firebaseArray(itemsRef).$add(item);
	// });

});