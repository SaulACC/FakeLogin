import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {MarketComponent} from './market/market.component';
import {BrandComponent} from './brand/brand.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'market', component:MarketComponent, pathMatch:'full'},
  {path:'brand', component:BrandComponent, pathMatch:'full'},
  {path:'home', component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
