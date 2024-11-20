import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isAuth:boolean=false;
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.isAuth=this.authService.isAuthenticated();
  }
  onSignIn(){
    this.authService.signIn();
    this.isAuth=this.authService.isAuthenticated();
  }
  onSignOut(){
    this.authService.signOut();
    this.isAuth=this.authService.isAuthenticated();
  }

}
