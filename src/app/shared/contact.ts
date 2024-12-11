export class Contact {
    id:any;
    name!:string;
    email!:string;
    website!:string;
    projects!:string[];
    image!:string;
    featured:boolean;
    constructor(id:any,name:string,email:string,website:string,projects:string[],image:string,featured:boolean){
        this.id=id;
        this.name=name;
        this.email=email;
        this.website=website;
        this.projects=projects;
        this.image=image;
        this.featured=featured;
    }
}
