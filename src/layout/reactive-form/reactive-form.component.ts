import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { employee } from '../model';
import { Router } from '@angular/router';
import { ageRangeValidators } from './form';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({});

  constructor(
    private service: ApiService,
    private formBuilder: FormBuilder,
    private route: Router,
    private validator: ageRangeValidators
  ) {}

  value: any;
  employeeModel: employee = new employee();

  time: any;

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        emailDomainValidator,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),

      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      startTime: new FormControl('', [
        Validators.required,
        Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'),
      ]),
      endTime: new FormControl('', [
        Validators.required,
        Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'),
      ]),
      age: new FormControl('', [
        this.validator.ageRangeValidator,
        Validators.required,
      ]),
      //  salary : new FormControl('', [Validators.required, Validators.max(30000)])
    });
  }

  creatUser() {
    this.employeeModel.username = this.addUserForm.value.username;
    this.employeeModel.email = this.addUserForm.value.email;
    this.employeeModel.phone = this.addUserForm.value.phone;
    this.employeeModel.description = this.addUserForm.value.description;
    this.employeeModel.endTime = this.addUserForm.value.endTime;
    this.employeeModel.startTime = this.addUserForm.value.startTime;
    // this.employeeModel.salary=this.addUserForm.value.salary
    this.employeeModel.age = this.addUserForm.value.age;

    this.value = this.employeeModel;
    // console.log(this.employeeModel);
    // this.route.navigate(['/','about']);

    this.service.addEmployee(this.employeeModel).subscribe((data) => {
      console.log(data);
      alert("Employee added successfully")
    },
    err=>{
      alert("something went worng")
    }
    )
  }
}

function emailDomainValidator(control: FormControl) {
  let email = control.value;
  if (email && email.indexOf('@') != -1) {
    let [_, domain] = email.split('@');
    if (domain !== 'crossasyst.com') {
      return {
        emailDomain: {
          parsedDomain: domain,
        },
      };
    }
  }
  return null;
}
