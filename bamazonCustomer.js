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
  console.log("------------Select an item to purchase------------");

	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err; 
	  console.log("Error select: " + err);
    
    var table = new Table({
    	head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity']
    	// colWidths: [5, 20, 15, 10, 5]
    });

	  for (var i = 0; i < res.length; i++) {
    	table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
      );
 	 	}
 	 console.log(table.toString());
 	 	buyerPrompt ()

 	 });
};

function buyerPrompt() {	
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
    },

    ]).then(function(values) {
      var inputID = values.productID;
      var inputQuantity = values.inputQuantity;
      makePurchase (inputID,inputQuantity);
    });
}

function makePurchase(productID, quantityRequested) {
  connection.query("SELECT * FROM products WHERE id =?" + productID, function(error, response) {
    if (quantityRequested <= res[0].stock_quantity) {
      var totalCost = res[0].price * quantityRequested;
      console.log("Product successfully added to cart. You total cost is" + totalCost);
    } else {
      console.log("Insufficient quantity!")
    }
  });
};

    	

  
