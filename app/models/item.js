//model logic here
const sql = require('../database/database')

module.exports = class Item {
	constructor(item) {
		this.name = item.name;
		this.qty = item.qty;
		this.amount = item.amount;
	};
	
	static getItems() {
		return sql.execute("SELECT * FROM Item");
	};

	static getItem(itemId){
		return sql.execute("SELECT * FROM Item WHERE item_id = ?", [itemId]);
	};

	createItem(result){
		return sql.execute(
			"INSERT INTO Item (item_name, item_qty, item_amount) VALUES (?, ?, ?)", 
			[this.name, this.qty, this.amount]		
		);
	}

	updateItem(){
		
	}

	deleteItem(){

	}
}