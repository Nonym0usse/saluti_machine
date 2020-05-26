import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from "@angular/fire/auth";
import {ActivatedRoute, Router} from "@angular/router";
import {Guid} from "guid-typescript";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginFormGroup: FormGroup;
  message: string;
  currentUser: string;

  constructor(private formBuilder: FormBuilder, private db: AngularFirestore, public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {


    this.LoginFormGroup = this.formBuilder.group({
      mail: '',
      password: ''
    });
  }

  submit(){
    const formValue = this.LoginFormGroup.value;
    this.afAuth.signInWithEmailAndPassword(
      formValue.mail,
      formValue.password
    ).then(data => {
      this.router.navigate(['/home', data]);
    }).catch(error => {
      this.message = error;
    })
  }

}
