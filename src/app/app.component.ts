import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ]
})
export class AppComponent {
  title = 'fab';
  isOpen =false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
}
}
