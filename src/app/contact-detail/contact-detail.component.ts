import { Component, Inject, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact!: Contact | undefined;
  idContact: any
  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject('BaseURL')public baseUrl:string) { }
  ngOnInit(): void {
    //snapshot method  
    // this.idContact=this.route.snapshot.params['id'];
    //observable method
    this.route.paramMap.subscribe(result => { this.idContact = result.get('id') });
    // this.contact=this.contactService.getContactById(this.idContact);
    this.contactService.getContactById(this.idContact).subscribe({ next: (contact) => this.contact = contact });
  }
  OnContacts() {
    this.router.navigateByUrl('/contacts');
  }

}
