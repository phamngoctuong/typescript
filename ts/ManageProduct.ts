import {Product} from 'ts/Product';
export class ManageProduct {
	private _products : Product[] = [];
	constructor() {
		let product1 = new Product(1,'Product Name 1', 1000,'Description Product Name 1', true, "1.jpg");
		let product2 = new Product(2,'Product Name 2', 2000,'Description Product Name 2', false, "2.jpg");
		let product3 = new Product(3,'Product Name 3', 3000,'Description Product Name 3', true, "3.jpg");
		let product4 = new Product(4,'Product Name 4', 4000,'Description Product Name 4', false, "2.jpg");
		this.addProductToCart(product1);
		this.addProductToCart(product2);
		this.addProductToCart(product3);
		this.addProductToCart(product4);
	}
	addProductToCart(product: Product): void {
		this._products.push(product);
	}
}