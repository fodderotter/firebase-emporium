angular.module('emporium')
.directive('addItem', function() {
	return {

		  scope: {}
		, templateUrl: './src/components/addItem/addItem.html'
		, controller: function( $scope, firebaseRef, $firebaseArray, $firebaseObject ) {
			var itemsRef = new Firebase(firebaseRef.ref + 'items');
			$scope.newItem = {};
			$scope.formShow = false;

			$scope.addItem = function() {
				$scope.newItem.featured = false;
				$scope.newItem.inStock = true;
				$firebaseArray(itemsRef).$add($scope.newItem);
				$scope.formShow = false;
			}
		}

	}
});