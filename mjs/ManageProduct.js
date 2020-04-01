"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("ts/Product");
class ManageProduct {
    constructor() {
        this._products = [];
        let product1 = new Product_1.Product(1, 'Product Name 1', 1000, 'Description Product Name 1', true, "1.jpg");
        let product2 = new Product_1.Product(2, 'Product Name 2', 2000, 'Description Product Name 2', false, "2.jpg");
        let product3 = new Product_1.Product(3, 'Product Name 3', 3000, 'Description Product Name 3', true, "3.jpg");
        let product4 = new Product_1.Product(4, 'Product Name 4', 4000, 'Description Product Name 4', false, "2.jpg");
        this.addProductToCart(product1);
        this.addProductToCart(product2);
        this.addProductToCart(product3);
        this.addProductToCart(product4);
        console.log(this._products);
    }
    addProductToCart(product) {
        this._products.push(product);
    }
}
exports.ManageProduct = ManageProduct;
//# sourceMappingURL=ManageProduct.js.map