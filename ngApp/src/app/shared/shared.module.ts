import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';
import { MaterialModule } from '../../assets/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/');
}

export const transLoader = {
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
}

@NgModule({
    exports: [
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [],

})
export class SharedModule { }