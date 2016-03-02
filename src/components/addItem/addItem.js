angular.module('emporium')
.directive('addItem', function() {
	return {

		scope: {

		},
		templateUrl: './src/components/addItem/addItem.html',
		controller: function($scope, firebaseUrl, $firebaseArray) {
			var itemsRef = new Firebase(firebaseUrl.ref + "items");
			$scope.addItem = function(newItem){
				$firebaseArray(itemsRef).$add(newItem);
				$scope.formShow = false;
			}
		}
	}
});