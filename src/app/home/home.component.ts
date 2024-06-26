import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  products: Product[];
  heading = 'Mobilni telefoni'
  //@Input() products: Product[]; //lista proizvoda tipa Product koje cemo dalje da prosledjujemo
  
  constructor(
    private cartService: CartService,
    private productService: ProductService

  ){}
  
  ngOnInit(): void {
  //  this.products = this.products; //homeu smo prosledili niz produkata od komponente product
  this.products = this.productService.products;
  }

  search=''; 
  //@Output() productCreated = new EventEmitter<number>();
  //@Output() productReduced = new EventEmitter<number>();


  //onAddToCart() {
  //  this.productCreated.emit();
  //}
  //onRemoveFromCart() {
  //  this.productReduced.emit();
  //}


  addNewItem(value:Product){
    this.cartService.addProduct(value);
  }
  removeItem(value:Product){
    this.cartService.removeProduct(value);
  }

}
