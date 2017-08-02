var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;

  // run the start function after the connection is made to prompt the user
  // makeTable();
});

console.log("------------Welcome to Bamazon!------------");

function makeTable() {
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) {
	  	console.log("Error select: " + err);
            return;
        }
		console.log("------------Select an item to purchase------------");


	  var table = new Table({
    	head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity']
    	colWidths: [5, 20, 15, 10, 5]
    	});

	  for (var i = 0; i < res.length; i++) {
    	table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
 	 	}
 	 console.log(table.toString());
 	 	userPrompt ()

 	 });
};

var userPrompt = function () {
	inquire.prompt([
	{
        type: "input",
        name: "productID",
        message: "What id product would like to purchase?"
    },
    {
    	type:"input",
   		message: "How many would you like to purchase?",
    	name: "quantity"
    }
    ])
    	

  
