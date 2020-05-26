import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  beverage: Observable<Beverage[]>;


  constructor(private db: AngularFirestore) {}



}
class Beverage {
  id: string;
  name: string;
  city: string;
  beverage: [];
}
