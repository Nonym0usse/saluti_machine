import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { DetailRoutingModule } from './detail/detail-routing.module';
import {LoginRoutingModule} from "./login/login-routing-module";
import {NgxElectronModule} from "ngx-electron";
import {QrcodeComponent} from "./qrcode/qrcode.component";
import {QrCodeRoutingModule} from "./qrcode/qr-code-routing-module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'qrcode',
    redirectTo: 'qrcode',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginRoutingModule,
    QrCodeRoutingModule,
    NgxElectronModule,
    DetailRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
