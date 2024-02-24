import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit{
  constructor(private cartService: CartService) { }
  shippingCosts!: Observable<{ type: string, price: number }[]>;
  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }



}
