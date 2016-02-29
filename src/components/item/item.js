angular.module('emporium')
.directive('itemDir', function() {
	return {

		  scope: {
			  item: '='
			, admin: '@'
		  }
		, templateUrl: './src/components/item/item.html'

	}
});