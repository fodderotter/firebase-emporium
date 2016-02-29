angular.module('emporium')
.directive('itemDir', function() {
	return {

		  scope: {
			  item: '='
			, admin: '@'
		  }
		, templateUrl: './src/components/item/item.html'
		, controller: function( $scope, firebaseRef, $firebaseObject ) {
			var itemsRef = new Firebase(firebaseRef.ref + 'items');

			$scope.item = $firebaseObject(itemsRef.child($scope.item.$id));

			$scope.buyItem = function() {
				itemsRef.child($scope.item.$id)
						.child('inStock')
						.set(false);
			}

			$scope.restock = function() {
				itemsRef.child($scope.item.$id)
						.child('inStock')
						.set(true);
			}

			$scope.deleteItem = function() {
				$firebaseObject(itemsRef.child($scope.item.$id)).$remove();
			}
		}

	}
});