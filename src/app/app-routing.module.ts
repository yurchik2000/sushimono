import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutComponent } from './pages/about/about.component';
import { ActionComponent } from './pages/action/action.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'action', component: ActionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
