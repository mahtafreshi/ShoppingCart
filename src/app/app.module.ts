import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdditemComponent } from './pages/cart/additem/additem.component';
import { CartComponent } from './pages/cart/cart/cart.component';
import { ListitemsComponent } from './pages/cart/listitems/listitems.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    CartComponent,
    ListitemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
