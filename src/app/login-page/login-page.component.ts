import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  pageName:string="";
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmitLogin(event){
    debugger
    if(event["Email"].length>0 && event["Password"].length>0){
      this.pageName= 'Home';
      this._router.navigateByUrl(this.pageName);
    }
    else if(event["Email"].length==0 && event["Password"].length==0)
    {
      alert("Enter your Credentials")
  
    }
    else if(event["Email"].length==0){
      alert("Enter your Email")
    }
    else if(event["Password"].length==0){
      alert("Enter your Password")
    }
   
  }

}
