import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {BundlesComponent} from "./store/page/bundles/bundles.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'store/bundles', component: BundlesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
