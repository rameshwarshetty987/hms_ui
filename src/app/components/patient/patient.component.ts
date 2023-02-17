import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/common/patient';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  
     patient: Patient = new Patient();
     submitted = false;
      
  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    // this.employees = this.employeeService.getEmployeesList();
  }

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{

      console.log(data);
    },
    error=> console.log(error));
  }
   
  onSubmit(){
    this.submitted = true;
   this.savePatient();
  }

  }
