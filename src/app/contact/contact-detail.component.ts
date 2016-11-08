import { Component, Input } from '@angular/core';
import { Contact } from './contact.model';

@Component({
    selector: 'contact-detail',
    templateUrl: './contact-detail.component.html'
})

export class ContactDetailComponent {
    @Input()
    public contact: Contact;
}
