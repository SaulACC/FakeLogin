import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {


  marketForm:FormGroup;

  constructor(
    public formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.marketForm = this.formBuilder.group({
      main: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      sec: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]),
      third: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
      sector: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      address: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]),
      telephone: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)])
    });
  }

  get getControl(){
    return this.marketForm.controls;
  }


  onClick(){
    alert(
      this.marketForm.controls.main.value
      );
  }
}
