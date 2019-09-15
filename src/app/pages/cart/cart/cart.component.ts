import { Component, OnInit } from "@angular/core";

//models
import { CartModel } from "src/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  total: number = 0;
  cartItems: CartModel[] = [];

  constructor() {
    for (let i = 0; i < 10; ++i) {
      this.cartItems.push({
        Name: "item" + i,
        id: i,
        Qty: i,
        Price: i * 2
      });
      this.total = this.cartItems[i].Price * this.cartItems[i].Qty;
    }
  }

  ngOnInit() {}

  // Remove Item from shopping Cart
  removeItem(item: CartModel) {
    console.log(item);
  }
  addItem() {}
  resetForm() {}
}
