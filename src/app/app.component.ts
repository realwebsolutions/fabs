import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ServicesComponent } from "./services/services.component";
import { HomeComponent } from "./home/home.component";
import { FaceComponent } from "./services/face/face.component";
import { BeardComponent } from "./services/beard/beard.component";
import { HairComponent } from "./services/hair/hair.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AboutusComponent, ServicesComponent, HomeComponent, FaceComponent, BeardComponent, HairComponent]
})
export class AppComponent {
  title = 'fab';
  isOpen =false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
}
}
