import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversepipe'
})
export class ReversepipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let new_string = value;
    if(args[0]){
      new_string += " ."
    }
    if (args[1] === "singleQ") {
      new_string = " ' " + new_string+ " ' ";
    }
    if (args[1] === "doubleQ") {
      new_string = ' " ' + new_string+ ' " ';
    }
    return new_string;// this is the value which is returned by pype
  }

}
