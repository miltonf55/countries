import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nombre:string="Yuleni"
  img:string="https://i.blogs.es/06cb35/1366_2000-4-/1366_2000.jpeg"
  valor:string="Hola"
  alumno:any={
    nombre:"Yuleni", 
    apellido:"Campos"
  }
  email:string=""

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    console.log(this.email)
  }

  back(e:any){
    console.log(e.srcElement.style.background)
    e.srcElement.style.background='red'
    
  }
}
