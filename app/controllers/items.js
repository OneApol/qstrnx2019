//insert controller logic
const itemModel = require('../models/item');

exports.getItems = (req, res, next) => {
	itemModel.getItems()
	.then(([rows, fieldData]) => {
		res.send(rows);
	})
	.catch(err => { 
		console.log(err); 
	});
};

exports.getItem = (req, res, next) => {
	itemModel.getItem(req.params.itemId)
	.then(results => {
		res.send(results);
	})
	.catch(err => {
		console.log(err);
	})
};

exports.createItem = (req, res, next) => {
	const newItem = new itemModel(req.body);
	if(!newItem.name || !newItem.qty || !newItem.amount){

        res.status(400).send({ error:true, message: 'Please provide item' });

    }

    else {
    	newItem.createItem()
    	.then(([ result ]) => {

    		res.status(200).send({message: `Insert Success with id: ${result.insertId}`});

    	})
    	.catch(err => {
    		console.log(err);
    	});
    }
};


exports.updateItem = (req, res, next) => {

};

exports.deleteItem = (req, res, next) => {

};


