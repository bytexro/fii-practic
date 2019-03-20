import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'even',
  pure: true // or false -> impure
})
export class EvenPipe implements PipeTransform {
  transform(values: number[], even: boolean = true): number[] {
    return values.filter(number => number % 2 === (even ? 0 : 1));
  }
}
