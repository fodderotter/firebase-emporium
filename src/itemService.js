angular.module('emporium')
.factory('itemService', function() {
	return {

		addItem: function( newItem ) {
			newItem.inStock = true;
			newItem.featured = false;
			this.items.push( newItem );
		}
	}
});