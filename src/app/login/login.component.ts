import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  signIn($event) {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  }

  signUp($event) {
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  }

  signInHandler($event) {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  }

  signUpHandler($event) {
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  }

}
