import { BuiltinMethod } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  getName(name){
    return name;
  }
  click(){
    console.log("click event");

  }
  eventUp(){
    console.log("event up works");
  }
  eventDown(){
    console.log("event Down works");
  }
  eventPress(){
    console.log("event Down works");
  }
  getVal(val){
    console.log(val);
  }
  fname="firstName";
  disabledBox=true;
  
  enableInput(){
    this.disabledBox=false;
    this.fname="suraj"
  }
  name="lastName"
  disabledBox1=true;
  placeHolder="hello";
  enableInput1(){
    this.disabledBox1=false;
    this.placeHolder=this.name;
  }

  day=false;
  day1=false;
  day2="Morning";
  dday="today";

  arrays=[
    'Hulk',
    'Black Widow',
    'Iron man',
    'Thor'
  ]

  object=[
    {
      fName:"Krishna",
      age:20
    },
    {
      fName:"Ram",
      age:27
    },
    {
      fName:"Raju",
      age:30
    }
  ]

  person="Mohan";

  textColor="blue";
  bgColor="black";
  styleColor="newFont";

  dateExample=Date();

  faname:string='';
  onSubmit(formValue:NgForm){
    console.log(formValue);
  }

}
