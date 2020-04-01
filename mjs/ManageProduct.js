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
    }
    addProductToCart(product) {
        this._products.push(product);
    }
    getProduct() {
        let products = this._products;
        let length = products.length;
        var html = "";
        for (let i = 0; i < length; ++i) {
            html += `
				<div class="col-md-3">
          <div class="card mb-4 shadow-sm">
            <img src="./images/${products[i].image}" alt="${products[i].image}">
            <div class="card-body">
              <p class="text-danger text-center">${products[i].price}</p>
              <p class="text-success text-center">${products[i].name}</p>
              <p class="card-text">${products[i].description}</p>
              <div class="d-flex justify-content-center align-items-center">              
                <button type="button" class=" btn btn-primary btn-sm buynow" data-idsp="${products[i].id}">Mua hàng</button>
              </div>
            </div>
          </div>
        </div>
			`;
        }
        return html;
    }
    getProductById(id) {
        let products = this._products;
        let length = products.length;
        for (let i = 0; i <= length; ++i) {
            if (i == (id - 1)) {
                return products[i];
            }
        }
    }
}
exports.ManageProduct = ManageProduct;
//# sourceMappingURL=ManageProduct.js.map