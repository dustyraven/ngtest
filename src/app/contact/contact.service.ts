import { BackendService } from '../shared/backend.service';
import { Logger } from '../shared/logger.service';
import { Contact } from './contact.model';
import { Injectable } from '@angular/core';

@Injectable()

export class ContactService {
    private contacts: Contact[] = [];

    constructor(private backend: BackendService, private logger: Logger) {}

    public getContacts() {
        this.backend.getAll(Contact).then( (contacts: Contact[]) => {
            this.logger.log(`Fetched ${contacts.length} contacts.`);
            this.contacts.push(...contacts);
        }).catch(
            err => this.logger.error(`ContactService error: ${err}`)
        );

        return this.contacts;
    }
}
