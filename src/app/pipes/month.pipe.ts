import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: number | string): string {

    let date = new Date();
    if (typeof value === 'number') {
      date.setMonth(value);
      return formatDate(date, 'MMMM', 'en-US');
    }
    return 'NaN'
  }

}
