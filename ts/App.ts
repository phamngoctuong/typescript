import {ManageProduct} from 'ts/ManageProduct';
import {ManageCart} from 'ts/ManageCart';
import {ProductCart} from 'ts/ProductCart';
var productrelated = new ManageProduct();
var products = new ManageCart();
var relatedproducts = document.getElementById('relatedproducts');
var productspurchased = document.getElementById('productspurchased');
relatedproducts.innerHTML = productrelated.getProduct();
var buynows = document.querySelectorAll('.buynow');
var length = buynows.length;
for (let i:number = 0; i < length; ++i) {
	buynows[i].addEventListener("click", function(){
		let id:number = this.getAttribute('data-idsp');
		let buyproduct:Product = productrelated.getProductById(id);
		if(products.checkProduct(buyproduct) == -1) {
			var buyproductcart: ProductCart = new ProductCart(buyproduct,1);
			products.addProductToCart(buyproductcart);
		}else {
			products.increaseProduct(buyproduct);
		}
		productspurchased.innerHTML = products.showCart();
	}
}