import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
            {path: 'cart', component: CartComponent},
        ]),
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
        CartComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
