import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: '[app-contacts]',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts!: Contact[];
  //errMess:string;
  //isWaiting:boolean=true;
  public constructor(private router: Router, private contactService: ContactService) { }
  ngOnInit(): void {
    //this.contacts = this.contactService.getContacts();
    this.contactService.getContacts()
      .subscribe({
        next: (contacts) => { this.contacts = contacts; /*this.isWaiting = false;*/ },
        error: (errmess) => {
          this.contacts = [];
          /*this.errMess=<any>errmess;this.isWaiting=false;*/
        },
      });
  }
  onDelete(id: number) {
    // this.contactService.deleteContactById(id);
    this.contactService.deleteContactById(id).subscribe(
      {
        next: result => {
          console.log("contact deleted!");
          let index = this.contacts.findIndex(contact => contact.id == id)
          this.contacts.splice(index, 1);
        }
      }
    );

  }
  onAbout() {
    this.router.navigate(['/about']);
  }
  onAddContact() {
    this.router.navigateByUrl('/contacts/edit/-1');
  }

}
