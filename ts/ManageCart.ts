import {ProductCart} from 'ts/ProductCart';
export class ManageCart {
	private _productcarts : ProductCart[] = [];
	addProductToCart(product:ProductCart):void {
		this._productcarts.push(product);
		console.log(this._productcarts);
	}
}