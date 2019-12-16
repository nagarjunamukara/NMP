import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { SrpComponent } from './srp/srp.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { SupportComponent } from './support/support.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search'},
  { path: 'home', pathMatch: 'full', redirectTo: 'search'},
  { path: 'search', component: SrpComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'support', component: SupportComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'registrationform', component: RegistrationformComponent },  // you must add your component here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
