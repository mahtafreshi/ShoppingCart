import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
// store
import { StoreModule, MetaReducer } from "@ngrx/store";
import { reducers } from "../store/reducers";
import { environment } from "src/environments/environment.prod";

// components
import { AppComponent } from "./app.component";
import { CartComponent } from "./pages/cart/cart/cart.component";

// variables
export const metaReducers: MetaReducer<any>[] = [];

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreModule.forFeature("carts", reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
