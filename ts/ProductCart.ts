import {Product} from 'ts/Product';
export class ProductCart {
	private _product: Product;
	private _count: number;
	constructor(product:Product, count:number = 1) {
		this._product = product;
		this._count = count;
	}
	getProduct(): Product {
		return this._product;
	}
}