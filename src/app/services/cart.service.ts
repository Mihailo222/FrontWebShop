import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../home/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: Product[] = []; //prazna lista narucenih proizvoda
  listLength = new BehaviorSubject<number>(0);
  constructor() { }

  //dodaj novi proizvod u korpu
  addProduct(product: Product){
    //prvo pronadji da li u listi cartList postoji proizvod koji zelis da dodas
    const existingProduct = this.cartList.find((p) => p.title==product.title)
   if(!existingProduct){ //ako nismo nasli takav proizvod
    product.inCart++; //povecaj broj proizvoda u korpi
    this.cartList.push(product); // dodaj novi proizvod u korpu

   } else {
    existingProduct.inCart++; //ako pr. vec postoji u korpi, povecaj broj proizvoda za 1 (tog pr. koji je vec u korpi)jer si onda narucio vise komada tog proizvoda
   } 
   //u svakom slucaju povecaj duzinu liste proizvoda u korpi
   this.listLength.next(this.cartList.reduce((a,b) => a+b.inCart, 0));

  }

  //metoda za brisanje proizvoda iz korpe
  removeProduct(product:Product){
    const index = this.cartList.findIndex((p) => p.title == product.title);

    if(index < 0){
      return; //ako se proizvod ni ne nalazi u korpi
    }
    this.cartList[index].inCart--; //smanji broj komada datog pr. u korpi

    //ako je komada 0 od datog proizvoda, obrisi taj proizvod iz korpe
    if(this.cartList[index].inCart === 0)
      this.cartList.splice(index,1);

    //radi sumu svih inCart vrednosti
    this.listLength.next(this.cartList.reduce((a,b) => a + b.inCart, 0));







  }




}
