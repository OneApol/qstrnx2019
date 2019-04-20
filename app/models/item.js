//model logic here
const sql = require('../database/database')

module.exports = class Item {
	constructor(item) {
		this.name = item.name;
		this.qty = item.qty;
		this.amount = item.amount;
	}
	
	static getItems(result) {
		sql.query("SELECT * FROM Item", (err, res) => {
			if(err){
				console.log("Error: ", err);
				result(null, err);
			}

			else {
				console.log("Items: ", res);
				result(null, res);
			}
		});
	}
}