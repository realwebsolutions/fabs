import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';

export const routes: Routes = [

    { path:'', redirectTo: 'home', pathMatch:"full"},
    { path: 'home', component: HomeComponent},


];
