import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.css']
})
export class FullNameComponent implements OnInit {

  query:string=''

  type:number=0

  constructor() { }

  ngOnInit(): void {
  }

}
