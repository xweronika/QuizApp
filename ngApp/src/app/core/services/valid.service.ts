import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ValidService {
  constructor(private translate: TranslateService) { }

  getError(name: string, control: FormControl): string {
    if (!this.isTouched(control)) return "";
    else return this.generateError(name, control);
  }
  isTouched(control: FormControl): boolean {
    const valid = control.valid;
    const dirty = control.dirty;
    return !valid && dirty ? true : false;
  }
  generateError(name: string, control: FormControl): string {
    const max = control.errors!['maxlength']?.requiredLength | 0;
    const min = control.errors!['minlength']?.requiredLength | 0;

    const field = this.translate.instant('add.field_' + name);
    const required = this.translate.instant('add.is_required');
    const shorter = this.translate.instant('add.cannot_shorter');
    const longer = this.translate.instant('add.cannot_longer');
    const characters = this.translate.instant('add.characters');

    if (control.hasError('required'))
      return `${field} ${required}.`;
    else if (control.hasError('minlength'))
      return `${field} ${shorter} ${min} ${characters}.`;
    else if (control.hasError('maxlength'))
      return `${field} ${longer} ${max} ${characters}.`;
    else return ""
  }
}
