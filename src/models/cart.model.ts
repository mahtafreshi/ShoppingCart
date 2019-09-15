export interface IProduct {
  id?: number;
  Name: string;
  Price: number;
}
export class ProductModel implements IProduct {
  Name: string = "";
  Price: number = 0;
  id?: number = 0;
  constructor() {}
}

export class CartModel extends ProductModel {
  Qty: number = 0;
  constructor() {
    super();
  }
}
