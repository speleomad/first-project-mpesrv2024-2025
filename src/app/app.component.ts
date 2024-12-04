import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   isAuth:boolean=false;
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      {next :(mpesrv:boolean)=>{this.isAuth=mpesrv}
     /*,
      error:(err:any)=>console.log(err),
      complete: ()=>console.log("isAuth")*/
    }
     
    )
    throw new Error('Method not implemented.');
  }
  title = 'first-project';
}
