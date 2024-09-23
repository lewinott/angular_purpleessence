
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../Services/Login/login.service';
import { LoginResponse } from '../../Interfaces/login-response';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

