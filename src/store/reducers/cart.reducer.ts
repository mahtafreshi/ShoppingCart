import { Action } from "@ngrx/store";
import { CartModel } from "../../models/cart.model";
import * as fromActions from "../actions/cart.actions";
import { InitialState } from "@ngrx/store/src/models";
import { CartItemsState } from ".";

export interface ICartState {
  data: CartModel[];
  loaded: boolean;
  loading: boolean;
}
export const initialState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromActions.CartActions
): ICartState {
  switch (action.type) {
    case fromActions.LOAD_CART:
      state.data.push(action.payload);
      return {
        ...state,
        loading: true
      };
    case fromActions.LOAD_CART_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case fromActions.LOAD_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case fromActions.ADD_TO_CART:
      state.data.push(action.payload);
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case fromActions.REMOVE_FROM_CART:
      // const index: number = state.data.indexOf(action.payload);
      // if (index !== -1) {
      if (state.data.length > 0) {
        state.data.splice(0, 1);
      }
      return {
        ...state,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
}

export const getCartsLoading = (state: CartItemsState) =>
  state.cartitems.loading;
export const getCartsLoaded = (state: CartItemsState) => state.cartitems.loaded;
export const getCartItems = (state: CartItemsState) => {
  return state.cartitems.data;
};
