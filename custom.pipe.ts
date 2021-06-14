import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string): string {
    let temp : string = value.slice(0,4);
    let temp1 : string = value.slice(4,10);
    return temp+'-'+temp1;
  }

}
