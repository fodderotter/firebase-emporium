angular.module('emporium')
.directive('itemDir', function() {
	return {

		  scope: {
			  item: '='
			, admin: '@'
		  }
		, templateUrl: './src/components/item/item.html',
		controller: function($scope, firebaseUrl, $firebaseObject) {
			var itemsRef = new Firebase(firebaseUrl.ref + "items/");
			$scope.item = $firebaseObject(itemsRef.child($scope.item.$id));
			$scope.buyItem = function(){
				itemsRef.child($scope.item.$id)
						.child("inStock")
						.set(false);
			}
			$scope.removeItem = function() {
				itemsRef.child($scope.item.$id)
						.remove();
			}
		}
	}
});