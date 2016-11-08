import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormDemoComponent } from './form-demo.component';

@NgModule({
    imports: [ BrowserModule, ContactModule, SharedModule, FormsModule ],
    declarations: [ AppComponent, FormDemoComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
