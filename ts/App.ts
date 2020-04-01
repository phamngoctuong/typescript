import {ManageProduct} from 'ts/ManageProduct';
var productrelated = new ManageProduct();
var relatedproducts = document.getElementById('relatedproducts');
relatedproducts.innerHTML = productrelated.getProduct();
var buynows = document.querySelectorAll('.buynow');
var length = buynows.length;
for (let i:number = 0; i < length; ++i) {
	buynows[i].addEventListener("click", function(){
		let id:number = this.getAttribute('data-idsp');
		console.log(id);
	}
}