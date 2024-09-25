
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../Services/Login/login.service';
import { LoginResponse } from '../../Interfaces/login-response';
import { HomeService } from '../../Services/Home/home.service';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: any;

  constructor(private HomeService: HomeService){
    this.getProducts();
  }

  async getProducts() {
    try {
        this.products = await this.HomeService.getProducts();
        console.log(this.products)
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
  }

  
}

