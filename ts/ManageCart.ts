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
}