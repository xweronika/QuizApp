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
    name = this.capitalizeFirstLetter(name);

    if (control.hasError('required'))
      return `${name} is required.`;
    else if (control.hasError('minlength'))
      return `${name} can not be shorter than ${min} characters.`;
    else if (control.hasError('maxlength'))
      return `${name} can not be shorter than ${max} characters.`;
    else return ""
  }
  capitalizeFirstLetter(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
