import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info={
    name:"Demo",
    email:"demo@gmail.com",
    tel:12345678
  }
  //comments:any[];
  //J'ai fixé le problème, en faite j'ai oublié l'initialisation de la liste comments
  //comments:any[]=[];
  comments:Comment[]=[];
  constructor() { }
  getInfo(){
    return this.info;
  }
  addComment(comment:Comment){
    comment.date=new Date();
    this.comments.push(comment);
  }
  getAllComment():Comment[]{
    return this.comments;
  }
}
