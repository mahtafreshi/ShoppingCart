import { Component, OnInit } from "@angular/core";

//models
import { CartModel, ProductModel } from "src/models/cart.model";

//  store
import * as FromActions from "../../../../store/actions/cart.actions";
import * as fromReducers from "../../../../store/reducers";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  total = 0;
  newItem: CartModel;
  price: number = 0;
  cartItems$: Observable<CartModel[]>;

  readonly PRODUCTS: ProductModel[] = [
    { Name: "A1 BOX", Price: 11, id: 1 },
    { Name: "A2 Box", Price: 11, id: 2 },
    { Name: "A3 BOX", Price: 11, id: 3 },
    { Name: "A4 Box", Price: 11, id: 4 }
  ];
  constructor(private store: Store<fromReducers.CartItemsState>) {}

  ngOnInit() {
    this.cartItems$ = this.store.select<any>(fromReducers.getCartItems);
    this.newItem = new CartModel();
  }

  // Remove item from shopping Cart
  removeItem(item: CartModel) {
    this.total -= item.Price;
    this.store.dispatch(new FromActions.RemoveFromCart(item));
  }
  // Add new item from shopping Cart
  addItem() {
    if (this.newItem.id < 1 || this.newItem.Qty < 1) {
      alert("please select Item and Qty");
      return;
    } else {
      let item = this.PRODUCTS.filter(
        item => item.id.toString() === this.newItem.id.toString()
      );
      this.newItem.Name = item[0].Name;
      this.newItem.Price = item[0].Price;
      this.total += this.newItem.Price;
      this.store.dispatch(new FromActions.AddToCart({ ...this.newItem }));
      this.resetForm();
    }
  }

  resetForm() {
    this.newItem.Price = 0;
    this.newItem.Qty = 0;
    this.newItem.id = 0;
  }

  onChangeItem(deviceValue) {
    this.price = 0;
    if (parseInt(deviceValue) > 0) {
      let item = this.PRODUCTS.filter(
        item => item.id === parseInt(deviceValue)
      );
      if (item) {
        this.price = item[0].Price;
      }
    }
  }
}
