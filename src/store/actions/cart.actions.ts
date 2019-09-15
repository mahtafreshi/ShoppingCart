import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { CartModel } from "../../models/cart.model";

export const LOAD_CART = "[CART] Load cart";
export const LOAD_CART_FAIL = "[CART] Load cart fail";
export const LOAD_CART_SUCCESS = "[CART] Load cart success";

export const ADD_TO_CART = "[CART] Add";
export const REMOVE_FROM_CART = "[CART] Remove";

export class LoadCart implements Action {
  readonly type = LOAD_CART;
  constructor(public payload: any) {}
}
export class LoadCartFail implements Action {
  readonly type = LOAD_CART_FAIL;
  constructor(public payload: any) {}
}
export class LoadCartSuccess implements Action {
  readonly type = LOAD_CART_SUCCESS;
  constructor(public payload: any) {}
}
export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: any) {}
}

export class RemoveFromCart implements Action {
  readonly type = REMOVE_FROM_CART;

  constructor(public payload: any) {}
}

export type CartActions =
  | LoadCart
  | LoadCartFail
  | LoadCartSuccess
  | AddToCart
  | RemoveFromCart;
