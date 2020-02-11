import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ContactListComponent } from './components/pages/contact/contact-list/contact-list.component';
import { AlertErrorComponent } from './components/bootstrap/alert-error/alert-error.component';
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { ContactNewModalComponent } from './components/pages/contact/contact-new-modal/contact-new-modal.component';

const routes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contacts/list', component: ContactListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //Define page default
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactListComponent,
    AlertErrorComponent,
    ModalComponent,
    ContactNewModalComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
