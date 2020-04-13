
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  title = 'registration';
  name = "A Name or FormControl";

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      grade: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      technique: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      parentsFirstName: ['', [Validators.required, Validators.minLength(1)]],
      parentsLastName: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }
  

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
          return ('must complete all areas of the form');
    }

    alert('Registration Complete' + JSON.stringify(this.registerForm.value, null, 4));
    // this.router.navigateByUrl('confirmation');  The 'router' is not recognized.
  }
  
}

  

