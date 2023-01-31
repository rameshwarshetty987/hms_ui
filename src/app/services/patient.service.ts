import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = "http://localhost:8080/api/patient";

  constructor(private httpClient : HttpClient) { }

  createPatient(patient){
     //return an observable
     return this.httpClient.post(this.baseUrl,patient);
  }
}
