import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  public names: object | any = environment.supported_langs;
  private supported_langs: Array<string> = Object.keys(environment.supported_langs);
  private currentLang: string = localStorage.getItem('language') || this.translate.getBrowserLang() || '';

  constructor(public translate: TranslateService) {
    translate.addLangs(this.supported_langs);
    translate.setDefaultLang(environment.default_lang);
    translate.use(this.supported_langs.includes(this.currentLang)
      ? this.currentLang
      : environment.default_lang);
  }
  changeLanguage(langselect: string) {
    localStorage.setItem('language', langselect)
    this.translate.use(langselect);
  }
}
