import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {

  private default_lang = 'en';
  private supported_langs = { 'en': 'English', 'pl': 'Polish' };

  public names: object | any = this.supported_langs;
  private keys: Array<string> = Object.keys(this.supported_langs);
  private currentLang: string = localStorage.getItem('language') || this.translate.getBrowserLang() || '';

  constructor(public translate: TranslateService) {
    translate.addLangs(this.keys);
    translate.setDefaultLang(this.default_lang);
    translate.use(this.keys.includes(this.currentLang) ? this.currentLang : this.default_lang);
  }
  
  changeLanguage(langselect: string) {
    localStorage.setItem('language', langselect)
    this.translate.use(langselect);
  }
}
