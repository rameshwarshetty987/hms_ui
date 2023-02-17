import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../common/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = "http://localhost:9099/api/patient";

  constructor(private httpClient : HttpClient) { }

  createPatient(patient : Patient) : Observable<any>{
     //return an observable
     return this.httpClient.post(`${this.baseUrl}`,patient);
  }

}
