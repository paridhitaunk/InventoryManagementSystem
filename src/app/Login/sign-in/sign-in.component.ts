import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { InventoryServicesService } from 'src/app/Services/inventory-services.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  ngOnInit(): void {
   
  }
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.authService
      .login(email, password)
      .subscribe(() => {
        this.router.navigate(['/adminDashboard']);
      });
  }
  
  }
  
  

