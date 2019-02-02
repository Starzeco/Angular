import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false, // Nie jest to zbyt dobre rozwiązanie, bo za każdym razem oblicza wszystko na stronie i tylko jak musimy używajmy
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStream: string, propName: string): any {
    if (value.length === 0 || filterStream === ''){
      return value;
    }
    const resultArray = [];
    for (const item of value) {

      if (item[propName] === filterStream) {
        resultArray.push(item);

      }

    }
    return resultArray;
  }

}
