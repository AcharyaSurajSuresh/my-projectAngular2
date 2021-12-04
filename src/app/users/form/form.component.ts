import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  fname:string='';
  lname:string='';
  age:string='';
  terms:boolean=false;
 
  onSubmit(formValue:NgForm){
    console.log(formValue.value)
    console.log(formValue)
  }
}
