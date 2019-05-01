import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupFirstPageVO } from './signupFirstPage-vo';
import { Router} from '@angular/router';
import { Data } from '../data';
import {CountryStatesMapper} from '../i8n/countryStatesMapping';
import { DISABLED } from '@angular/forms/src/model';
import { StateDistrictMapper } from '../i8n/stateDistrictMapping';


@Component({
  selector: 'app-signup-one',
  templateUrl: './signup-one.component.html',
  styleUrls: ['./signup-one.component.css']
})
export class SignupOneComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private data: Data) { }
  signupFristPage: FormGroup;

  signupFirstPage: FormGroup;
  states: [];
  districts: [];
  singnupPage = new SignupFirstPageVO();

  ngOnInit() {
    this.signupFirstPage  =  this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [],
      middleName: [],
      mail: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^(\\+91[\\-\\s]?)?[0]?(91)?[789]\\d{9}$')]],
      userAddress: ['', Validators.required],
      userCity: ['', Validators.required],
      userPincode: ['', Validators.required],
      userCountry: ['', Validators.required],
      userState: ['', Validators.required]
  });
  }


  signup() {
   if (this.signupFirstPage.valid) {
      console.log(this.singnupPage);
    }
  }
  submit(singnupPage) {
    this.router.navigate (['signupSecond']);
  }

  fetchAllStatesByCountry(country) {
    this.states = new CountryStatesMapper().getStatesByCountry(country);
    return this.states;
  }

  fetchAllDistrictsByState(state) {
    this.districts = new StateDistrictMapper().getDistrictByState(state);
    return this.districts;
  }

}
