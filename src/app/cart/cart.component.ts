import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../home/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
@Injectable()
export class CartComponent implements OnInit {

cartList: Product[] = [];
isEmpty=true;

constructor(private cartService:CartService){

cartService.listLength.subscribe((length) => {
if(length>0){
  this.isEmpty=false;
}
});

}



ngOnInit(): void{
  this.cartList = this.cartService.cartList;
}


//metoda za dodavanje novog proizvoda
addNewItem(value: Product){
  this.cartService.addProduct(value);
}

reduceNumberOfItems(value: Product){
  this.cartService.removeProduct(value);
}

}
