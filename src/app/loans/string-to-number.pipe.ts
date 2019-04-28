import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToNumber'
})
export class FormatStringToNumberPipe implements PipeTransform {
  transform(value: string): number {
    return +value;
  }
}
