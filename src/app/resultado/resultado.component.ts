import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PartialName } from '../models/partialName';
import { RestcountriesService } from '../restcountries.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnChanges {

  listC: Array<PartialName>=new Array<PartialName>()

  lenguages:string[]=new Array

  qv:boolean=true

  @Input() type:number=0

  @Input() query:string=''

  constructor(private PaisI: RestcountriesService, private ruta: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      switch (this.type) {
      case 0:
        this.PaisI.countrieNameQuery(this.query).subscribe({
          next: data => {
            this.qv=true
            this.listC=data;
            this.asignarIdioma()
          },
          error: error => {
            this.qv=false
          }
        })
      break;
      case 1:
        this.PaisI.countrieCurrencyQuery(this.query).subscribe({
          next: data => {
            this.qv=true
            this.listC=data;
            this.asignarIdioma()
          },
          error: error => {
            this.qv=false
          }
        })
      break;
      case 2:
        this.PaisI.countrieRegionQuery(this.query).subscribe({
          next: data => {
            this.qv=true
            this.listC=data;
            this.asignarIdioma()
          },
          error: error => {
            this.qv=false
          }
        })
      break;
      default:
        this.PaisI.countrieNameQuery(this.query).subscribe({
          next: data => {
            this.qv=true
            this.listC=data;
            this.asignarIdioma()
          },
          error: error => {
            this.qv=false
          }
        })
      break;
    }
    }
  }

  asignarIdioma(){
    let i:number=0
    for (let l of this.listC) {
      this.lenguages[i]=l.languages[Object.keys(l.languages)[0]]
      i++
    }
  }

  mostrarPais(countrieI:PartialName){
    this.ruta.navigate(['mostrarPais', {countrie: JSON.stringify(countrieI)}])
  }

}