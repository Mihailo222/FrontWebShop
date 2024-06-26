import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../home/product';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  //buttonClick = true;

  //@Input() product:Product; //jedan proizvod tipa Product koji se prosledjuje home komponenti
  //pa zbog prosledjivanja ide Input




  //sada cemo da napravimo metode koje ce nam pomoci ukoliko zelimo da 
  //izvrsimo databinding tj. ukoliko zelimo da na odredjeni dogadjaj dojde do odredjene metode
  //tj. na klik na dugme, dolazi do odredjenog ponasanja
  //cartItems: number = 0;



  //nakon servisa
  numberOfElements: number = 0;
  isCartPage: boolean = false;


  @Input() product: Product;
  @Output() productCreated = new EventEmitter<Product>();
  @Output() productReduced = new EventEmitter<Product>();


  constructor(private cartService: CartService, private router: Router){}
 
  ngOnInit():void {
    if(this.router.url === '/cart') this.isCartPage = true;
    else this.isCartPage = false;
  }



  onAddToCart(){
    if(this.product.supplies > 0){
      this.product.supplies--;
     // this.productCreated.++; //povecaj br. proizvoda u korpi
      this.productCreated.emit(this.product);
    }
  }

  onRemoveFromCart(){
    if(this.product.supplies>=0){
      this.product.supplies++; //povecaj broj supplies ako neko obrise iz korpe 
      //this.cartItems--;
      this.productReduced.emit(this.product);
    }
  }



  //dodajem novi atribut koji mi omogucuje da upotrebim servis
  //inCart: number;

  buttonClick=true;
}
