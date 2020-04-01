import {ManageProduct} from 'ts/ManageProduct';
import {ManageCart} from 'ts/ManageCart';
import {ProductCart} from 'ts/ProductCart';
var productrelated = new ManageProduct();
var products = new ManageCart();
var relatedproducts = document.getElementById('relatedproducts');
var productspurchased = document.getElementById('productspurchased');
var countcart = document.getElementById('countcart');
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
		countcart.innerHTML = '( ' + products.countProduct() + ' sản phẩm)';
		provisionalprice.innerHTML = products.intoMoney() + " đ";
		intomoney.innerHTML = products.intoMoney() + " đ";
		let countproducts = document.getElementsByClassName('countproduct');
		let leng = countproducts.length;
		for (let i:number = 0; i < leng; ++i) {
			countproducts[i].addEventListener('change',function(){
				let idproduct:number = this.getAttribute('data-idproduct');
				idproduct = parseInt(idproduct);
				let producted:Product = productrelated.getProductById(idproduct);
				let amountupdate = parseInt(this.value);
				products.updateProduct(producted, amountupdate);
				countcart.innerHTML = '( ' + products.countProduct() + ' sản phẩm)';
				provisionalprice.innerHTML = products.intoMoney() + " đ";
				intomoney.innerHTML = products.intoMoney() + " đ";
			}
		}
	}
}