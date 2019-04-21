const itemModel = require('../models/item');

exports.pageNotFound = (req, res, next) => {
	res.status(404).render('404page', {pageTitle: 'Page Not Found'});
};

exports.homePage = (req, res, next) => {
	res.render('home', {pageTitle: "Home Page"});
}

exports.addItemPage = (req, res, next) => {
	res.render('create', {pageTitle: 'Add Item'});
}

exports.updateItemPage = (req, res, next) => {
	itemModel.getItem(req.params.itemId)
	.then(( [ rows,metaData ] ) => {
		res.render('update', {
			pageTitle: 'Item Update',
			existing: rows.length > 0,
			item: rows[0]
		});
	})
	.catch(err => {
		console.log(err);
	});
}