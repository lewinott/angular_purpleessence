import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../Services/Login/login.service';
import { LoginResponse } from '../../Interfaces/login-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  _fb = inject(FormBuilder)
  loginService = inject(LoginService)
  response!: LoginResponse 
  isLoading: boolean = false; 
  router = inject(Router);

  form = this._fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  })



  login() {
    this.isLoading = true;
    this.loginService
      .logar(
          this.form.controls.username.value!, 
          this.form.controls.password.value!
        ).subscribe({
          next: (val: LoginResponse) => {
            this.isLoading = false;
            this.response = val;
            this.router.navigate(['/home']);
        }
      })
  }
}
