//Insert routes here
const express = require('express');

const router = express.Router();

const items = require('../controllers/items');

//without ID
router.route('/items')
	.get(items.getItems)
	.post(items.createItem)

//with ID
router.route('item/:itemId')
	.get(items.getItem)
	.put(items.updateItem)
	.delete(items.deleteItem)

module.exports = router;