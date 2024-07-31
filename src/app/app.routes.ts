import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { HairComponent } from './services/hair/hair.component';
import { FaceComponent } from './services/face/face.component';
import { BeardComponent } from './services/beard/beard.component';

export const routes: Routes = [

    // { path:'', redirectTo: 'home', pathMatch:"full"},
    { path: 'home', component: HomeComponent},
   { path: 'aboutus', component: AboutusComponent},
   { path: 'services', component: ServicesComponent},
   { path: 'hair', component: HairComponent},
   { path: 'face', component: FaceComponent},
   { path: 'beard', component: BeardComponent},








];
