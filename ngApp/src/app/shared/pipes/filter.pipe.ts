import { Pipe, PipeTransform } from '@angular/core';
import { Questions } from '../../core/services/quiz.service'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<Questions>, filter: number): Array<Questions> {
    if (!items) return items;
    return items.filter(item => item.index == filter);
  }
}
