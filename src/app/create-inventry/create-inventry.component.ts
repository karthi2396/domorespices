import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { InventryVO, InventryVOList } from './inventry-vo';
@Component({
  selector: 'app-create-inventry',
  templateUrl: './create-inventry.component.html',
  styleUrls: ['./create-inventry.component.css']
})
export class CreateInventryComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  name = 'Angular 6';
  inventryForm: FormGroup;
  inventryList = new InventryVOList();
  ngOnInit() {
    this.inventryForm = this.fb.group({
      skills: this.fb.array([
        this.addSkillFormGroup()
      ])
    });
  }

  addSkillButtonClick(): void {
   ( this.inventryForm.get('skills') as FormArray).push(this.addSkillFormGroup());
  }
  removePhone(index) {
    (this.inventryForm.get('skills') as FormArray).removeAt(index);
  }

  createInventry() {
    this.inventryList.inventryVOList = this.inventryForm.get('skills').value;
    console.log(this.inventryForm);
    console.log(this.inventryList);
  }

  addSkillFormGroup(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      food: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  removeSkillButtonClick(skillGroupIndex: number): void {
    (this.inventryForm.get('skills') as FormArray).removeAt(skillGroupIndex);
  }

}
