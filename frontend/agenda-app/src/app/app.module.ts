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
import { ContactEditModalComponent } from './components/pages/contact/contact-edit-modal/contact-edit-modal.component';
import { ContactDeleteModalComponent } from './components/pages/contact/contact-delete-modal/contact-delete-modal.component';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import {AuthService} from "./services/auth.service";

const routes : Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contacts/list', component: ContactListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //Define page default
];

function jwtfactory(authService: AuthService) {
    return {
        whitelistedDomains: [
            new RegExp('localhost:8000/*')
        ],
        tokenGetter: () => {
            return authService.getToken();
        }
    }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactListComponent,
    AlertErrorComponent,
    ModalComponent,
    ContactNewModalComponent,
    ContactEditModalComponent,
    ContactDeleteModalComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtfactory,
                deps: [AuthService]
            }
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
