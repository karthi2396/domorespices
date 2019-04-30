import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupFirstPageVO } from './signupFirstPage-vo';
import { Router} from '@angular/router';
import { Data } from '../data';

@Component({
  selector: 'app-signup-one',
  templateUrl: './signup-one.component.html',
  styleUrls: ['./signup-one.component.css']
})
export class SignupOneComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private data: Data) { }
  signupFristPage: FormGroup;
  singnupPage = new SignupFirstPageVO();
  ngOnInit() {
    this.signupFristPage  =  this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      mname: ['', Validators.required],
      mail: ['', Validators.required],
      alternateMail: ['', Validators.required],
      userAddress: ['', Validators.required],
      userCity: ['', Validators.required],
      userPincode: ['', Validators.required],
      userState: ['', Validators.required],
      userCountry: ['', Validators.required],
  });
  }

  signup() {
   if (this.signupFristPage.valid) {
      console.log(this.singnupPage);
    }
  }
  submit(singnupPage) {
    this.router.navigate (['signupSecond']);
  }

}
