"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ManageProduct_1 = require("ts/ManageProduct");
const ManageCart_1 = require("ts/ManageCart");
const ProductCart_1 = require("ts/ProductCart");
var productrelated = new ManageProduct_1.ManageProduct();
var products = new ManageCart_1.ManageCart();
var relatedproducts = document.getElementById('relatedproducts');
var productspurchased = document.getElementById('productspurchased');
var countcart = document.getElementById('countcart');
relatedproducts.innerHTML = productrelated.getProduct();
var buynows = document.querySelectorAll('.buynow');
var length = buynows.length;
for (let i = 0; i < length; ++i) {
    buynows[i].addEventListener("click", function () {
        let id = this.getAttribute('data-idsp');
        let buyproduct = productrelated.getProductById(id);
        if (products.checkProduct(buyproduct) == -1) {
            var buyproductcart = new ProductCart_1.ProductCart(buyproduct, 1);
            products.addProductToCart(buyproductcart);
        }
        else {
            products.increaseProduct(buyproduct);
        }
        productspurchased.innerHTML = products.showCart();
        countcart.innerHTML = '( ' + products.countProduct() + ' sản phẩm)';
        provisionalprice.innerHTML = products.intoMoney() + " đ";
        intomoney.innerHTML = products.intoMoney() + " đ";
        let countproducts = document.getElementsByClassName('countproduct');
        let leng = countproducts.length;
        for (let i = 0; i < leng; ++i) {
            countproducts[i].addEventListener('change', function () {
                let idproduct = this.getAttribute('data-idproduct');
                idproduct = parseInt(idproduct);
                let producted = productrelated.getProductById(idproduct);
                let amountupdate = parseInt(this.value);
                products.updateProduct(producted, amountupdate);
                countcart.innerHTML = '( ' + products.countProduct() + ' sản phẩm)';
                provisionalprice.innerHTML = products.intoMoney() + " đ";
                intomoney.innerHTML = products.intoMoney() + " đ";
            });
        }
        ;
        let deleteproduct = document.getElementsByClassName('deleteproduct');
        let lengt = deleteproduct.length;
        for (let i = 0; i < lengt; ++i) {
            deleteproduct[i].addEventListener("click", function () {
                let idproduct = this.getAttribute('data-idproduct');
                idproduct = parseInt(idproduct);
                products.deleteProduct(idproduct);
            });
        }
    });
}
//# sourceMappingURL=App.js.map