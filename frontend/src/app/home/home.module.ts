import { NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ] 
})
export class HomeModule { }
