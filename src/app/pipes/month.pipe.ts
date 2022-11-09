import { Pipe, PipeTransform } from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: number): unknown {

    let date = new Date();
    date.setMonth(value);
    return formatDate(date, 'MMMM','en-US');
  }

}
