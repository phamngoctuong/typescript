"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, price, description, state, image) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._state = state;
        this._image = image;
    }
    get id() {
        return this._id;
    }
    set id(variable) {
        this._id = variable;
    }
    get name() {
        return this._name;
    }
    set name(variable) {
        this._name = variable;
    }
    get price() {
        return this._price;
    }
    set price(variable) {
        this._price = variable;
    }
    get description() {
        return this._description;
    }
    set description(variable) {
        this._description = variable;
    }
    get state() {
        return this._state;
    }
    set state(variable) {
        this._state = variable;
    }
    get image() {
        return this._image;
    }
    set image(variable) {
        this._image = variable;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map