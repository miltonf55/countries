import { Component, OnInit } from '@angular/core';
interface Video{
  nom:string,
  time:number
}
@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  nombre:string="Yuleni"
  img:string="https://i.blogs.es/06cb35/1366_2000-4-/1366_2000.jpeg"
  cargando:boolean=true
  valor:string="Hola"
  alumno:any={
    nombre:"Yuleni", 
    apellido:"Campos"
  }
  email:string=""

  //pipes sirven para dar formato a las variables sintaxis  {{var | pipe}}
  listV:Array<Video> = [
      {
          nom:"Vi",
          time:5
      },
      {
          nom:"Vo",
          time:15
      },
      {
          nom:"Vu",
          time:25
      }
  ]
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando=false
    }, 3000)
  }

  mostrar(){
    console.log(this.email)
  }

  back(e:any){
    console.log(e.srcElement.style.background)
    e.srcElement.style.background='red'
    
  }


}
