const productController = require('../controllers/product.controller');

module.exports = app => {
    app.post("/api/products", productController.createProduct);
    app.get("/api/products", productController.getAllProducts);
    app.get("/api/product/:id", productController.getOneProduct);
    // created route to clear test data entries via postman 
    app.delete("/api/product/:id", productController.deleteProduct);
}
