import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isLoading = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 10000);
  }

  // ngAfterViewChecked() {
  //   if (!this.isLoading) {
  //     gsap.from('.vh-100',1.5, {
        
  //       x: 1500,
  //       ease: 'power4.in'
  //     });
  //   }
  // }
}