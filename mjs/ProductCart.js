"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductCart {
    constructor(product, count = 1) {
        this._product = product;
        this._count = count;
    }
    getProduct() {
        return this._product;
    }
    changeAmount(count) {
        this._count = count;
    }
    getAmount() {
        return this._count;
    }
}
exports.ProductCart = ProductCart;
//# sourceMappingURL=ProductCart.js.map