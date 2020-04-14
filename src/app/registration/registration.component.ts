
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  title = "registration form";
  

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
          return ;
    }

    alert('Registration Complete' + JSON.stringify(this.registerForm.value, null, 4));
    
  }
  
}

  

