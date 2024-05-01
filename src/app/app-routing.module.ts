import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { guard } from './guard';

const routes: Routes = [
  // anonymous user
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  // anonymous user-end

  // authorized user
  { path: 'my-orders', component: MyOrdersComponent },

  {
    path: 'order-success',
    component: OrderSuccessComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [guard],
  },
  // authorized user end

  // admin user
  {
    path: 'admin/admin-products',
    component: AdminProductsComponent,
  },
  {
    path: 'admin/admin-orders',
    component: AdminOrdersComponent,
  },
  // admin user end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
