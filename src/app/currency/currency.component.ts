import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  query:string=''
  
  type:number=1
  
  constructor() { }

  ngOnInit(): void {
  }

}
