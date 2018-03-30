var mysql = require("mysql");
var inquirer = require("inquirer");

//Create connection to the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //Username
    user:"root",

    //password
    password: "root",
    database: "bamazon"
});

//Connect to Bamazon server and sql database
connection.connect(function(err) {
    if (err) throw err;

    //Console.log to confirm server connection
    console.log("Connected to server with ID " + connection.threadId)
   
    //Commence start function after server connection initialized
    start();
});

//Function that begins the bamazon app.  Called again when a transaction is completed.
function start() {

    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Are you ready to purchase an item?",
            default: true
        }


    ]).then(function (answer) {

        if (answer.confirm) {
            selectProduct();
        } else {
            console.log("Ok! Please return when you'd like to buy something!")
        }
    });
}

//Product Selection function, supported by inquirer NPM module
function selectProduct() {

    connection.query("SELECT * FROM `products`", function(err, res){

        if (err) throw err;

        inquirer.prompt([

            {
                type: "list",
                name: "choice",
                message: "Select the item ID corresponding to the item you'd like to purcahse: ",
                choices: function () {

                    var choicesArray = [];
                    for (var i = 0; i < res.length; i++) {
                        choicesArray.push(res[i].item_id + ") " + res[i].product_name + " " + "$" + res[i].price);
                    }

                    return choicesArray;
                }
            },

            {
                type: "input",
                name: "quantity",
                message: "How many items of this kind would you like to buy?"
 
            }
        ]).then(function (answer) {

            var selectedProduct;

            for (var i = 0; i < res.length; i++) {
            
            if (res[i].product_name === answer.choices) {
                selectedProduct = res[i];
               
            }
        }

            if (res.stock_quantity < parseInt(answer.quantity)) {

                connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: answer.quantity
                        },
                        {
                            id: selectedProduct.id
                        }
                    ],

                    function(err) {

                        if (err) throw err;
                        console.log("Your purchase was successful");
                        start();
                    }
            
                );
            } else {
                console.log("Sorry! Insufficient quantity of the selected item. Please try again later");
                start();
            }

        });

    }); //connection.query close

}