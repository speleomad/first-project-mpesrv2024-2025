import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { NgForm } from '@angular/forms';
import { Contact } from '../shared/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact!: Contact;
  constructor(private contactService: ContactService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (resutl) => {
        let id = resutl.get('id')
        //Update
        if (id != "-1") this.initContact(id);
        else this.contact = new Contact(null, "", "", "", [], "images/default-avatar.jpg", false)
      }
    )
  }
  initContact(id: any) {
    this.contactService.getContactById(id).subscribe({
      next: (contact) => this.contact = contact,
      error: (err) => console.log("error")
    })
  }

  onSubmit() {
    //Add contact
    if (this.contact.id == null) {
      this.contactService.addContact(this.contact).subscribe({
        next: (contact) => { this.router.navigateByUrl("/contacts/" + contact.id) },
        error: (error) => { console.log("add contact failed!") },
        complete: () => console.log("end")
      });
    }else{ //update contact
      this.contactService.updateContact(this.contact).subscribe({
        next: (contact) => { this.router.navigateByUrl("/contacts/" + contact.id) },
        error: (error) => { console.log("add contact failed!") },
        complete: () => console.log("end")
      });
    }
  }
 /*  onSubmit(form: NgForm) {
    console.log(form.value)
    let contact: Contact = {
      id: -1,
      //name:form.value['name']
      name: form.value.name,
      email: form.value.email,
      website: form.value.website,
      projects: [form.value.projects],
      featured: false,
      image: '../../assets/images/default-avatar.jpg'
    }
    this.contactService.addContact(contact);
    this.router.navigateByUrl("/contacts");
  } */
  onContacts() {
    this.router.navigateByUrl('/contacts')
  }
}
