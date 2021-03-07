import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  pure:true
})
export class UppercasePipe implements PipeTransform {
  i=0;
  transform(value: any, args?: any): any {
    console.log(this.i++)
    return value.toUpperCase();

  
  }

}
