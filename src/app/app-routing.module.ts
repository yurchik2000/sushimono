import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutComponent } from './pages/about/about.component';
import { ActionComponent } from './pages/action/action.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'action', component: ActionComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'category', component: AdminCategoryComponent},
    {path: 'product', component: AdminProductComponent},
    {path: 'discount', component: AdminDiscountComponent},
    {path: 'order', component: AdminOrderComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
