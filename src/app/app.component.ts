import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <main class="container">
            <section class="row">
                <contact-list></contact-list>
            </section>
        </main>
        `
})

export class AppComponent {

    public genders = [
        { value: 1, display: 'Female' },
        { value: 2, display: 'Male' }
    ];
}
