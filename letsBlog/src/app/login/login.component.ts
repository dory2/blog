import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../Models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User:UserModel=new UserModel();
  invalidUser:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Login(){
    if(this.User.Name == "blogger@grapecity.com" && this.User.Password=="1qaz!QAZ"){
    this.router.navigate(['/bloglist']);
    }
    else{
      this.invalidUser=true;
    }
  }
}
