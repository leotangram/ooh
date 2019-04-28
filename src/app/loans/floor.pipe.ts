import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'fixedValue'})
export class RoundPipe implements PipeTransform {
    /**
     *
     * @param value
     * @returns {number}
     */
    transform(value: number): string {
      if(value){
        let stri = value.toString()
        let arr = stri.split(".")
        return arr[0];
      }

      return "0"
      
    }
} 