import {ProductCart} from 'ts/ProductCart';
export class ManageCart {
	private _productcarts : ProductCart[] = [];
	addProductToCart(product:ProductCart):void {
		this._productcarts.push(product);
		console.log(this._productcarts);
	}
	checkProduct(product: Product):number {
		let length = this._productcarts.length;
		let products = this._productcarts;
		for (var i:number = 0; i < length; ++i) {
			if(products[i].getProduct().id == product.id) {
				return i;
			}
		}
		return -1;
	}
	increaseProduct(product: Product): void {
		let index: number = this.checkProduct(product);
		let indexnow = this._productcarts[index].getAmount();
		indexnow = indexnow + 1;
		this._productcarts[index].changeAmount(indexnow);
		console.log(this._productcarts);
	}
	showCart():string {
		let html: string = " ";
		let length = this._productcarts.length;
		let products = this._productcarts;
		for (let i:number = 0; i < length; ++i) {
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
	countProduct():number {
		let count: number = 0;
		let length = this._productcarts.length;
		let products = this._productcarts;
		for (let i:number = 0; i < length; ++i) {
			count += products[i].getAmount();
		}
		return count;
	}
	updateProduct(product:Product, count:number):void {
		let length = this._productcarts.length;
		let products = this._productcarts;
		for (let i:number = 0; i < length; ++i) {
			let idproduct: number = products[i].getProduct().id;
			if(idproduct == product.id) {
				products[i].changeAmount(count);
			}
		}
	}
	intoMoney(): number {
		let intomoney: number = 0;
		let length = this._productcarts.length;
		let products = this._productcarts;
		for (let i:number = 0; i < length; ++i) {
			let price: number = products[i].getProduct().price;
			let count: number = products[i].getAmount();
			intomoney += price * count;
		}
		return intomoney;
	}
	deleteProduct(ind:number):void {
		let products:ProductCart[] = this._productcarts;
		let length:number = this._productcarts.length;
		document.querySelectorAll('button[data-idproduct="'+ind+'"]')[0].parentElement.parentElement.style.display = 'none';
		for (let i:number = 0; i < length; ++i) {
			let idproduct: number = products[i].getProduct().id;
			if(idproduct == ind) {
				products.splice(i, 1);
				console.log(products);
				return false;
			}
		}
	}
}