import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { ImageCarouselComponentexport } from './image-carousel/image-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoadingComponent,ImageCarouselComponentexport],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fab';
}
