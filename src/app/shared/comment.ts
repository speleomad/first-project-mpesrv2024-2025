export class Comment {
    id:Number;
    //id?:Number;   ?: id est optionnel
    date:Date;
    message:string;
    constructor(id:Number, date:Date, message:string){
       this.id=id;
       this.date=date;
       this.message=message;
    }
    
}
