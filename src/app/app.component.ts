import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from './home/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prodavnica2';
  products: Product[] = [
    {
      title: 'Samsung Galaxy S22 Ultra',
      price: '985 euro',
      description:'Glavni model S22 serija u koji je ukljucena olovka.',
      image: '../../assets/images/samsung.jpg',
      supplies: 21,
      inCart: 0


    },
    {
      title: 'iPhone 14',
      price: '1400 euro',
      description:'Glavni model iPhone-a u koji spada vise memorijskih opcija.',
      image: '../../assets/images/iphone.jpg',
      supplies: 23,
      inCart: 0


    },
    {
      title: 'Xiaomi Redmi 10 Power',
      price: '600 euro',
      description:'Neki ekstremno glupav model.',
      image: '../../assets/images/xiaomi.jpg',
      supplies: 13,
      inCart: 0

    },
    {
      title: 'Samsung Galaxy Z Flip 3',
      price: '600 euro',
      description:'Glavni model Flip serija u koji je uk;jucena olovka.',
      image: '../../assets/images/samsungj.jpg',
      supplies: 23,
      inCart: 0


    }
  ]



  @Output() productCreated = new EventEmitter<number>();
  @Output() productReduced = new EventEmitter<number>();
  itemNumber: number = 0

  onAddToCart() {
    this.productCreated.emit();
    this.itemNumber++;
  }

  onRemoveFromCart() {
    this.productReduced.emit();
    if(this.itemNumber > 0) this.itemNumber--;
  }

}
