import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
    selector: 'contact-list',
    templateUrl: './contact-list.component.html'
})

export class ContactListComponent implements OnInit {
    public contacts: Contact[];
    public selectedContact: Contact;

    constructor(private service: ContactService) { }

    public ngOnInit () {
        this.contacts = this.service.getContacts();
    }

    public selectContact(contact: Contact): void {
        console.log(`Contact selected ${JSON.stringify(contact)}`);
        this.selectedContact = contact;
    }
}
