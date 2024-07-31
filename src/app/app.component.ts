import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ServicesComponent } from "./services/services.component";
import { HomeComponent } from "./home/home.component";
import { FaceComponent } from "./services/face/face.component";
import { BeardComponent } from "./services/beard/beard.component";
import { HairComponent } from "./services/hair/hair.component";
import { ContactusComponent } from "./contactus/contactus.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterOutlet, AboutusComponent, ServicesComponent, HomeComponent, FaceComponent, BeardComponent, HairComponent, ContactusComponent]
})
export class AppComponent {
  title = 'fab';
  isOpen = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOpen = false;
      }
    });
  }
  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
