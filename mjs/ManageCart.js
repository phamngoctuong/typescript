"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ManageCart {
    constructor() {
        this._productcarts = [];
    }
    addProductToCart(product) {
        this._productcarts.push(product);
        console.log(this._productcarts);
    }
    checkProduct(product) {
        let length = this._productcarts.length;
        let products = this._productcarts;
        for (var i = 0; i < length; ++i) {
            if (products[i].getProduct().id == product.id) {
                return i;
            }
        }
        return -1;
    }
    increaseProduct(product) {
        let index = this.checkProduct(product);
        let indexnow = this._productcarts[index].getAmount();
        indexnow = indexnow + 1;
        this._productcarts[index].changeAmount(indexnow);
        console.log(this._productcarts);
    }
    showCart() {
        let html = " ";
        let length = this._productcarts.length;
        let products = this._productcarts;
        for (let i = 0; i < length; ++i) {
            html += `
				<div class="row">
					<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
						<div class="row">
							<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
								<img src="./images/${products[i].getProduct().image}" alt="${products[i].getProduct().image}">
							</div>
							<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
								<a class="d-inline-block mb-2 text-success">${products[i].getProduct().name}</a>
								<p>${products[i].getProduct().description}</p>
							</div>
							<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-2">
								<p class="text-danger">${products[i].getProduct().price} đ</p>
								<input type="number" class="form-control countproduct" data-idproduct="${products[i].getProduct().id}" min="1" value="${products[i]._count}">
							</div>
						</div>
					</div>
					<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-5">
						<button type="button" class="btn btn-danger deleteproduct" data-idproduct="${products[i].getProduct().id}">DELETE</button>
					</div>
				</div>
			`;
        }
        return html;
    }
    countProduct() {
        let count = 0;
        let length = this._productcarts.length;
        let products = this._productcarts;
        for (let i = 0; i < length; ++i) {
            count += products[i].getAmount();
        }
        return count;
    }
    updateProduct(product, count) {
        let length = this._productcarts.length;
        let products = this._productcarts;
        for (let i = 0; i < length; ++i) {
            let idproduct = products[i].getProduct().id;
            if (idproduct == product.id) {
                products[i].changeAmount(count);
            }
        }
    }
    intoMoney() {
        let intomoney = 0;
        let length = this._productcarts.length;
        let products = this._productcarts;
        for (let i = 0; i < length; ++i) {
            let price = products[i].getProduct().price;
            let count = products[i].getAmount();
            intomoney += price * count;
        }
        return intomoney;
    }
    deleteProduct(ind) {
        let products = this._productcarts;
        let length = this._productcarts.length;
        document.querySelectorAll('button[data-idproduct="' + ind + '"]')[0].parentElement.parentElement.style.display = 'none';
        for (let i = 0; i < length; ++i) {
            let idproduct = products[i].getProduct().id;
            if (idproduct == ind) {
                products.splice(i, 1);
                console.log(products);
                return false;
            }
        }
    }
}
exports.ManageCart = ManageCart;
//# sourceMappingURL=ManageCart.js.map