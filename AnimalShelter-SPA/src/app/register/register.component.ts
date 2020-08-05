import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
// import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { Router } from '@angular/router';
// import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: [''],
      password: [''],
      knownAs: [''],
      city: [''],
      state: [''],
      confirmPassword: ['']
    });
  }

  // passwordMatchValidator(g: FormGroup) {
  //   return g.get('password').value === g.get('confirmPassword').value ? null : {mismatch: true};
  // }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration successful');
      this.router.navigate(['/home']);
    }, error => {
      this.alertify.error(error);
    });
  }

}
