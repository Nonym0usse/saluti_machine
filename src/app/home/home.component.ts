import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import {HomeService} from "./home.service";
import {every} from "rxjs/operators";
import {ElectronService} from "ngx-electron";
import {Guid} from "guid-typescript";
import {BehaviorSubject, Observable} from "rxjs";
const { ipcRenderer } = require('electron');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: string;
  beverage;
  public id: Guid;
  private routerInfo: BehaviorSubject<boolean>;

  constructor(private db: AngularFirestore, private home: HomeService, public afAuth: AngularFireAuth, private _electronService: ElectronService, private router: Router) {
  }

  ngOnInit(): void {
    this.id = Guid.create();

    this.afAuth.authState.subscribe(user =>{
      this.getCurrentUser(user);
    });

 }

 getCurrentUser(user){
   this.db.collection('bars').doc(user.uid).collection('beverage').valueChanges().subscribe((value) => {
     this.beverage = value;
   });
 }


 order(pump){
    //this.router.navigate(['/qrcode']);

  if(this._electronService.isElectronApp) {
     let response: string = this._electronService.ipcRenderer.sendSync('pump', pump);
     console.log(response);
   }
 }

}

class Beverage {
  name: string;
  city: string;
  beverage: [];
}
