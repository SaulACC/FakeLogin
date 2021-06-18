import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandForm:FormGroup;

  constructor(
    public formBuilder:FormBuilder
  ) {

  }

  ngOnInit() {
    this.brandForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      corporativeEmail: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    });
  }

  get getControl(){
    return this.brandForm.controls;
  }

  onClick(){
    alert(
      this.brandForm.controls.main.value
      );
  }
}
