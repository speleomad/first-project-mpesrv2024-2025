export class Contact {
    id:number;
    name!:string;
    email!:string;
    website!:string;
    projects!:string[];
    image!:string;
    featured:boolean;
    constructor(id:number,featured:boolean){
        this.id=id;
        this.featured=featured;
    }
}
