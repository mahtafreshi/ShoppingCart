import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// components
import { AppComponent } from "./app.component";
import { CartComponent } from "./pages/cart/cart/cart.component";

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
