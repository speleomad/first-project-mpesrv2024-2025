import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html', 
 /* template:`<h1>hello from {{title}}</h1>`,*/
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  info={
    name:"Demo",
    email:"demo@gmail.com",
    tel:12345678
  }
  comments=[];
  comment={date:null,message:"new comment"};
  newComment=false;
  addComment(){
    console.log("Message:"+this.comment.message);
   // this.comment.date=new Date();
    this.comments.push( /*this.comment*/
      {
      date:new Date(),message:this.comment.message
    })
    console.log(this.comments);
    //this.newComment=true;
  }
  
}
