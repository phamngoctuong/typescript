export class Product {
	private _id: number;
	private _name: string;
	private _price: number;
	private _description: string;
	private _state: boolean;
	private _image: string;
	constructor(id: number, name: string, price: number, description: string, state: boolean, image: stirng) {
		this._id = id;
		this._name = name;
		this._price = price;
		this._description = description;
		this._state = state;
		this._image = image;
	}
	public get id(): number {
		return this._id;
	}
	public set id(variable: number) :void{
		this._id = variable;
	}
	public get name(): string {
		return this._name;
	}
	public set name(variable: string):void{
		this._name = variable;
	}
	public get price(): number {
		return this._price;
	}
	public set price(variable: number):void{
		this._price = variable;
	}
	public get description(): string {
		return this._description;
	}
	public set description(variable: string):void{
		this._description = variable;
	}
	public get state(): boolean {
		return this._state;
	}
	public set state(variable: boolean):void{
		this._state = variable;
	}
	public get image(): string {
		return this._image;
	}
	public set image(variable: string):void{
		this._image = variable;
	}
}