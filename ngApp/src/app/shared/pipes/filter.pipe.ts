import { Pipe, PipeTransform } from '@angular/core';
import { Answer } from '../../core/services/quiz.service'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<Answer>, filter: number): Array<Answer> {
    if (!items) return items;
    if (!filter) filter = 1;
    return items.filter(item => item.index == filter);
  }
}
