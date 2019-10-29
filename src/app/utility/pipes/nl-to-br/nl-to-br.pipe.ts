import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nlToBr'
})
export class NlToBrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
