import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupFirstPageVO } from './signupFirstPage-vo';

@Component({
  selector: 'app-signup-one',
  templateUrl: './signup-one.component.html',
  styleUrls: ['./signup-one.component.css']
})
export class SignupOneComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  signupFirstPage: FormGroup;
  singnupPage = new SignupFirstPageVO();
  ngOnInit() {
    this.signupFirstPage  =  this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      mail: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      userAddress: ['', Validators.required],
      userCity: ['', Validators.required],
      userPincode: [],
      userState: ['', Validators.required],
      userCountry: ['', Validators.required],
  });
  }

  signup(){
   if (this.signupFirstPage.valid) {
      console.log(this.singnupPage);
    }
  }

}
