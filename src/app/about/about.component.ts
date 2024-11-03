import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  /* template:`<h1>hello from {{title}}</h1>`,*/
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  /*   info={
      name:"Demo",
      email:"demo@gmail.com",
      tel:12345678
    } */

  colors={odd:"red",even:"green"}
  info: any;
  comments :Comment[] = [];
  // comment={date:null,message:"new comment"};
  comment:Comment = new Comment(-1,new Date(),"");
  newComment = false;
  constructor(private aboutService: AboutService) { }
  ngOnInit(): void {
    this.info = this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComment();
  }
  addComment() {
    console.log("Message:" + this.comment.message);
    // this.comment.date=new Date();
    //this.comments.push( /*this.comment*/
     /* {
        date: new Date(), message: this.comment.message
      })*/
     this.aboutService.addComment({id:this.comment.id,
                                   date:this.comment.date,
                                   message:this.comment.message
     })
     //this.comments=this.aboutService.getAllComment();
     this.comment.message="";
    console.log(this.comments);
    //this.newComment=true;
  }

}
