import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-screen0001-login',
  templateUrl: './screen0001-login.component.html',
  styleUrls: ['./screen0001-login.component.css']
})
export class Screen0001LoginComponent implements OnInit {

  constructor() { }

  // ログインID
  loginId: String;

  // ログインパスワード
  loginPassword: String;

  ngOnInit() {
  }

}
