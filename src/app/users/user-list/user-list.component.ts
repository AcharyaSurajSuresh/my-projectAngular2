import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template:`
  <h2 class="one">Hi template works</h2>
  <h2 class="two">{{nname}}</h2>
  <hr>


  <div class="formH">
  <h1>Employee Interests Survey Form</h1>
  </div>
  <form>
  <div class="main">
  <p>Enter Your name:<input type="text" size="35px"></p>

  <p>Enter Your department:<input type="text" size="35px"></p>

  <p>Tell us a little about yourself:<textarea name="" id="" cols="50" rows="5" size="35px"></textarea></p>
  <p> Do you exercise at Home?
  <input type="radio" value="male" name="gender" ngModel> Male
  <input type="radio" value="female" name="gender" ngModel> Female</p>

  <div><p>How do you like to read about favorite topics?</p>
  <input type="checkbox" name="tc" ngModel>Books 
  <input type="checkbox" name="tc" ngModel>Online resources 
  <input type="checkbox" name="tc" ngModel>Phone apps
  <input type="checkbox" name="tc" ngModel>Magazines</div>

  <p> What genre of movies do you like?
  <select>
  <option id="">Comedy</option>
  <option id="">Horror</option>
  <option id="">Marvel</option>
  <option id="">Anime</option>
  </select>
  <br>
   <div>
  <button>Sumit form</button>
  </div>
  </div>
  </form>
  


  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nname="suraj";
}
