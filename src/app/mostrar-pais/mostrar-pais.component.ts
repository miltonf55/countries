import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartialName } from '../models/partialName';

@Component({
  selector: 'app-mostrar-pais',
  templateUrl: './mostrar-pais.component.html',
  styleUrls: ['./mostrar-pais.component.css']
})
export class MostrarPaisComponent implements OnInit {

  countrie:any = new Object();
  l:string=''
  d:string=''

  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.countrie=JSON.parse(this.ruta.snapshot.params['countrie']);
    console.log(this.countrie.currencies)
    this.l=this.countrie.languages[Object.keys(this.countrie.languages)[0]]
    this.d=this.countrie.currencies[Object.keys(this.countrie.currencies)[0]].name
  }


}
