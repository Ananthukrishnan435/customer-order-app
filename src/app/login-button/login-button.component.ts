import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  emailValue: string="";
  passwordValue: string="";
  @Output() submitLogin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onLoginSubmit(){
    debugger
    // if(document){ng serve
    
    this.emailValue = document.getElementById("emaiField")["value"];
    this.passwordValue = document.getElementById("passwordField")["value"];
    this.submitLogin.emit({Email:this.emailValue,Password:this.passwordValue});
    // }
  }
}
