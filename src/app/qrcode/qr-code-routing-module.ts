import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {QrcodeComponent} from "./qrcode.component";

const routes: Routes = [
  {
    path: 'qrcode',
    component: QrcodeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrCodeRoutingModule {}
