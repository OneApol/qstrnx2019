//insert controller logic
const itemModel = require('../models/item');

exports.getItems = (req, res, next) => {
	itemModel.getItems()
	.then(([rows, fieldData]) => {
		res.render('items', {
			items: rows,
			pageTitle: 'Items',
			path: '/items',
			hasItems: rows.length > 0
		});
	})
	.catch(err => { 
		console.log(err); 
	});
};

exports.getItem = (req, res, next) => {
	itemModel.getItem(req.params.itemId)
	.then(([rows, fieldData]) => {
		res.render('item', {
			item: rows[0],
			pageTitle: 'Item',
			path: '/item/:itemId',
			existing: rows.length > 0			
		});
	})
	.catch(err => {
		console.log(err);
	});
};

exports.addItem = (req, res, next) => {
	const newItem = new itemModel(req.body);
	if(!newItem.name || !newItem.qty || !newItem.amount){

        res.status(400).send({ error:true, message: 'Please provide item' });

    }

    else {
    	newItem.addItem()
    	.then(([ result ]) => {
    		
    		res.redirect('/items');
    		// res.status(200).send({message: `Insert Success with id: ${result.insertId}`});

    	})
    	.catch(err => {
    		console.log(err);
    	});
    }
};


exports.updateItem = (req, res, next) => {
	const updatedItem = new itemModel(req.body);
	if(!updatedItem.name || !updatedItem.qty || !updatedItem.amount){

        res.status(400).send({ error:true, message: 'Please provide item' });

    }
    else {
    	updatedItem.updateItem(req.params.itemId)
    	.then(([ result ]) => {

    		res.status(200).redirect(`/item/${req.params.itemId}`);

    	})
    	.catch(err => {
    		console.log(err);
    	});
    }
};

exports.deleteItem = (req, res, next) => {
	itemModel.deleteItem(req.params.itemId)
	.then(result => {

		res.status(200).redirect('/items');

	})
	.catch(err => {
		console.log(err);
	});
};


