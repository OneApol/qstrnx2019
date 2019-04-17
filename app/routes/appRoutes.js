//Insert routes here

"use strict";
module.exports = app => {
	const items = require('../controllers/itemsController');

	//without ID
	app.route('/items')
		.get(items.getItems)
		.post(items.createItem)

	//with ID
	app.route('item/:itemId')
		.get(items.getItem)
		.put(items.updateItem)
		.delete(items.deleteItem)

}