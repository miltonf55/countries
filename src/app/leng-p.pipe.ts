import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengP'
})
export class LengPPipe implements PipeTransform {

  valor:string=''
  transform(value: object): string {
    this.valor+=Object.keys(value)
    return this.valor;
  }

}
