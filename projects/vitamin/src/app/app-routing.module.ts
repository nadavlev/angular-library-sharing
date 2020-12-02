import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgotPasswordComponent, LoginComponent, RegisterComponent} from 'login';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {SettingsComponent} from './settings/settings.component';
import {ProductPageComponent} from './product-page/product-page.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'product-page', component: ProductPageComponent},
    {path: 'shopping-cart', component: ShoppingCartComponent},
    {path: 'settings', component: SettingsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
