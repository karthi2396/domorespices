import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupSecondPageVO } from './signup-second-page-vo';
import { ActivatedRoute } from '@angular/router';
import { SignupFirstPageVO } from '../signup-one/signupFirstPage-vo';
import { Data } from '../data';


@Component({
  selector: 'app-signup-two',
  templateUrl: './signup-two.component.html',
  styleUrls: ['./signup-two.component.css']
})
export class SignupTwoComponent implements OnInit {
  signupData = new SignupFirstPageVO();
  constructor(private formBuilder: FormBuilder,  private data: Data) {
    console.log(JSON.stringify(this.data.storage));
   }

  signupSecondForm: FormGroup;
  signupTwo = new SignupSecondPageVO();
  ngOnInit() {
    this.signupSecondForm  =  this.formBuilder.group({
      hname: ['', Validators.required],
      hbranch: ['', Validators.required],
      hpincode: ['', Validators.required],
      haddress: ['', Validators.required]
  });
  }

  signup() {
    if (this.signupSecondForm.valid) {
       console.log(this.signupTwo);
     }
   }


}
