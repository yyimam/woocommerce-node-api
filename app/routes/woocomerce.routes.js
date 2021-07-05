module.exports = function(app){
    var woocomerce = require('../controllers/woocomerce.controller.js');

    //create new product
    app.post('api/products', woocomerce.create);

    //retrieve all products
    app.get('api/products', woocomerce.findAll);

    //retrieve single product by id
    app.get('api/products/:id', woocomerce.findOne);

    //update products with Id
    app.put('/api/products/:id', woocomerce.update);

    //delete products with Id
    app.delete('api/products/:id', woocomerce.delete);

}
