import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//ovde su rute web stranice
const routes: Routes = [
  {path:'cart', component: CartComponent}, //aps. putanje bez kose crte
 // {path: 'home', component: HomeComponent}, //prikazi home komponentu
  {path: '', redirectTo:'/home', pathMatch: 'full'}, //ovu smo stavili sa /
  {path: '**', component: NotFoundComponent}

];
//wildcard ruta = bitno je da se nalazi na kraju, jer ruter proverava po redu po kom su rute definisane  !!
//vrlo je bitno da ova wildcart bude stavljena skroz dole, jer ** obuhvata sve rute, sto bi trebalo da znaci da 
//proveravajuci redom, ako stigne do poslednje opcije, morace da udje u page not found
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
