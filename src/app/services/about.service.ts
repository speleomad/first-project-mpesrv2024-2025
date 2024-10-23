import { Injectable } from '@angular/core';

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
  comments:any[]=[];
  constructor() { }
  getInfo(){
    return this.info;
  }
  addComment(comment){
    comment.date=new Date();
    this.comments.push(comment);
  }
  getAllComment(){
    return this.comments;
  }
}
