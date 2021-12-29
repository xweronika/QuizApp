import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule, transLoader } from './shared/shared.module';
import { ToolbarComponent } from './shared/bars/toolbar/toolbar.component';
import { LanguageSwitcherComponent } from './shared/bars/language-switcher/language-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(transLoader),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
