angular.module('emporium')
.factory('itemService', function() {
	return {

		  addItem: function( newItem ) {
			newItem.inStock = true;
			newItem.featured = false;
			this.items.push( newItem );
		  }

		, getItems: function() {
			return this.items;
		  }

		, items: [
				{
					  name: 'rotten log'
					, description: 'read the name dummy'
					, price: 14.99
					, featured: true
					, inStock: false
				}
				, {
					  name: 'slightly used tissue'
					, description: 'some wear and tear'
					, price: 36.22
					, featured: true
					, inStock: true
				}
				, {
					  name: 'ryan\'s personal phone number'
					, description: 'i probably won\'t answer anyway'
					, price: 99.99
					, featured: false
					, inStock: true
				}
				, {
					  name: 'provo dm7\'s collective tears from directive day'
					, description: 'could solve california\'s drought'
					, price: .99
					, featured: false
					, inStock: true
				}
		]
	}
});