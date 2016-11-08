import { Injectable, Type } from '@angular/core';
import { Logger } from './logger.service';
import { Contact } from '../contact/contact.model';

const CONTACTS: Contact[] = [
        new Contact(1, 'Maria', 'Magdalena', 'deva@heaven.com', '0666 123 456', '69 Heaven str.'),
        new Contact(2, 'Jesus', 'Christ', 'son@heaven.com', '0666 234 567', '68 Heaven str.'),
        new Contact(3, 'Lou', 'Cifer', 'master@hell.com', '0666 666 666', '666 Hell blvd.'),
        new Contact(4, 'Dusty', 'Raven', 'dusty@raven.com', '0878 510 454', '3 P. Evtimyi blvd.')
      ];

@Injectable()
export class BackendService {

    constructor(private logger: Logger) { }

    public getAll(type: Type<any>): Promise<any> {
        if (type === Contact) {
            this.logger.log('Backend service called for contacts');
            return Promise.resolve(CONTACTS); // TODO get from the database
        }

        let err = new Error(`Cannot get object of this type : ${type}`);
        return Promise.reject(err);
    }
}
