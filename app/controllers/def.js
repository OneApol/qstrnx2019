exports.pageNotFound = (req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, '..', 'views', '404page.html'));
};

exports.homePage = (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'items.html')); 
}