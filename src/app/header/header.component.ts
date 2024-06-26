import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() cartItems: number = 111;

  constructor(private cartService: CartService){
    cartService.listLength.subscribe((length)=>(this.cartItems=length))
  }
  ngOnInit(): void {}
}
