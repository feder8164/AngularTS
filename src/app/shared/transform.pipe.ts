import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: string, args: string = ''): any { // jesli nikt nie doda elementu dokleimy pusty string
    return value.charAt(0).toUpperCase() + value.slice(1) + args;
  }

}