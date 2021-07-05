// var WooCommerceAPI = require("woocommerce-api");
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default

// var WooCommerce = new WooCommerceAPI({
//   url: "http://localhost:8100",
//   consumerKey: "ck_1c32ad2e45a788122b6d58519ba86ab29dd7702c",
//   consumerSecret: "cs_9af77a7b537a86b780ee2fe2db2d72188fe60f7e",
// //   wpAPI: true,
//   version: "wc/v3",
// });
const api = new WooCommerceRestApi({
	url: "https://advancefitness.pk",
	consumerKey: "ck_1c32ad2e45a788122b6d58519ba86ab29dd7702c",
	consumerSecret: "cs_9af77a7b537a86b780ee2fe2db2d72188fe60f7e",
	version: "wc/v3"
  });

exports.create = function (req, res) {
  var newCustomer = req.body;
  // customers["customer" + newCustomer.id] = newCustomer;
  // console.log("--->After Post, customers:\n" + JSON.stringify(customers, null, 4));
  console.log("data", newCustomer);
  // res.end("Post Successfully: \n" + JSON.stringify(newCustomer, null, 4));
};

exports.findAll = function (req, res) {
  // console.log("--->Find All: \n" + JSON.stringify(customers, null, 4));
  // res.end("All Customers: \n" + JSON.stringify(customers, null, 4));
};

exports.findOne = function (req, res) {
  // var customer = customers["customer" + req.params.id];
  // console.log("--->Find customer: \n" + JSON.stringify(customer, null, 4));
  // res.end( "Find a Customer:\n" + JSON.stringify(customer, null, 4));
};

exports.update = function (req, res) {
  var id = parseInt(req.params.id);
  var updatedProducts = req.body;

  const data = {
	regular_price: "1350",
	manage_stock: true,
	in_stock: true,
	stock_quantity: 100
  };
 
  
  api.put("products/11057", data)
    .then((response) => {
		res.send(response.data);
		
    })
    .catch((error) => {
		res.send(error.response.data);
    //   return error.response.data;
    });
};

exports.delete = function (req, res) {
  
	
};
