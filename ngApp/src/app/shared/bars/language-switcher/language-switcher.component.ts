import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
  public names: object | any = environment.supported_langs;
  private supported_langs: Array<string> = Object.keys(environment.supported_langs);
  private browserLang: string = this.translate.getBrowserLang() || '';

  constructor(public translate: TranslateService) {
    translate.addLangs(this.supported_langs);
    translate.setDefaultLang(environment.default_lang);
    translate.use(this.supported_langs.includes(this.browserLang)
      ? this.browserLang
      : environment.default_lang);
  }
  ngOnInit(): void { }
}
