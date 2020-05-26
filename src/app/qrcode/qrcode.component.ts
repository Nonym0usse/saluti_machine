import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode'
var canvas = document.getElementById('canvas');
import { Guid } from "guid-typescript";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  public id: Guid;
  qrcodeId;

  public myAngularxQrCode: string = null;

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user =>{
      this.getCurrentUser(user);
    });
  }

  getCurrentUser(user){
     this.db.collection('bars').doc(user.uid).valueChanges().subscribe((value) => {
       this.qrcodeId = value;
     });

  }

  ngOnInit(): void {
    this.id = Guid.create();
    this.myAngularxQrCode = this.id.toString();
  }

  cancel(){
    this.router.navigate(['/home']);
  }
}
