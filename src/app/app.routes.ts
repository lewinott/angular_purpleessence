import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { CartComponent } from './Pages/cart/cart.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "cart",
        component: CartComponent
    }
];
