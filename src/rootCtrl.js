angular.module('emporium')
.controller('rootCtrl', function( $scope, itemService, firebaseRef, $firebaseArray ) {

	var ref = new Firebase(firebaseRef.ref);
	
	$scope.items = $firebaseArray(ref.child('items'));

});