import { PRODUCTS_URL } from '../constants';


export type ProductType = {
	id:number;
	rating: number,
	image: string,
	name: string;
}

export class ProductsAPI {
	static async getAll(): Promise<ProductType[]> {
		return (await fetch(PRODUCTS_URL)).json();
	}

	static async getById(id: number): Promise<ProductType> {
		return (await fetch(`${PRODUCTS_URL}/${id}`)).json();

	}
}
