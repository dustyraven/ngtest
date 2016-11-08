import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactService } from './contact.service';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ ContactListComponent, ContactDetailComponent ],
    exports: [ ContactListComponent ],
    providers: [ContactService]
})

export class ContactModule { }
