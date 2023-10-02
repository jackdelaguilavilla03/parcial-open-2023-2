import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {BundlesComponent} from "./store/page/bundles/bundles.component";
import {PageNotFoundComponent} from "./public/page-not-found/page-not-found.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'store/bundles', component: BundlesComponent},
    {path: '**', component: PageNotFoundComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
