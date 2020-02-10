import { ContatoModule } from './contato/contato.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { LoadingComponent } from './loading/loading.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { ModalComponent } from './modal/modal.component';
import { Modal } from './modal';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ContatoComponent } from './contato/contato.component';
import { EditarComponent } from './contato/editar/editar.component';
import { CadastrarComponent } from './contato/cadastrar/cadastrar.component';
import { LogoffComponent } from './logoff/logoff.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons'; */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    ModalComponent,
    RegistrarComponent,    
    EditarComponent,
    CadastrarComponent,    
    EditarComponent,
    ContatoComponent,
    LogoffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingModule,
    HomeModule,
    FormsModule,
    ContatoModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    /* jqxDataTableModule,
    jqxButtonModule, */
    NgbModule,
    
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

  ],
  exports: [],
  providers: [AuthService, Modal, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
