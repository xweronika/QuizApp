import { Pipe, PipeTransform } from '@angular/core';
import { Details } from '../services/quiz.service'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<Details>, filter: number): Array<Details> {
    if (!items) return items;
    return items.filter(item => item.index == filter);
  }
}
