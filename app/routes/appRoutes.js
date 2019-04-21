//Insert routes here
const express = require('express');

const router = express.Router();

const items = require('../controllers/items');
const defaults = require('../controllers/def');

//without ID
router.route('/items')
	.get(items.getItems)
	.post(items.addItem);

router.get('/item/add', defaults.addItemPage);
router.get('/item/update/:itemId', defaults.updateItemPage)

// with ID
router.route('/item/:itemId')
	.get(items.getItem)
	.put(items.updateItem)
	.delete(items.deleteItem);

module.exports = router;