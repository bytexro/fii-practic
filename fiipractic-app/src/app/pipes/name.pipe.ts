import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(name: string): string {
    return `${name[0].toUpperCase()}${name.substr(1, name.length)}`;
  }
}
