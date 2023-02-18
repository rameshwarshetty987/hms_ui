import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from './services/patient.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './components/patient/patient.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [PatientService],
  bootstrap: [AppComponent,PatientComponent]
})
export class AppModule { }