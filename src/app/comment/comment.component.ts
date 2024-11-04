import { Component, Input } from '@angular/core';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
/*  @Input() comments:Comment[]=[]; */
@Input() comment: Comment=new Comment(1, new Date(),"");
@Input() isEven:boolean=false;
@Input() isOdd:boolean=false;

}
