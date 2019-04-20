//insert controller logic
const itemModel = require('../models/item');

exports.getItems = (req, res, next) => {
	itemModel.getItems((err, item) => {
		if (err){
			res.send(err);
		}
		console.log('res', item);
		res.send(item);
	});
};

exports.createItem = (req, res, next) => {

};

exports.getItem = (req, res, next) => {

};

exports.getItem = (req, res, next) => {

};

exports.updateItem = (req, res, next) => {

};

exports.deleteItem = (req, res, next) => {

};


