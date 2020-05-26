import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuthModule} from "@angular/fire/auth";
import { QrcodeComponent } from './qrcode/qrcode.component';
import {QRCodeModule} from "angularx-qrcode";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const environment = {
  firebaseConfig : {
    apiKey: "AIzaSyDbv3gVRFfogV1cjak_h-6nytw4l3E1qR0",
    authDomain: "sirop-86774.firebaseapp.com",
    databaseURL: "https://sirop-86774.firebaseio.com",
    projectId: "sirop-86774",
    storageBucket: "sirop-86774.appspot.com",
    messagingSenderId: "682388243621",
    appId: "1:682388243621:web:d6ca0d05f1b52652f4394c"
  }
};

// Initialize Firebase

@NgModule({
  declarations: [AppComponent, LoginComponent, QrcodeComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    QRCodeModule,
    DetailModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
