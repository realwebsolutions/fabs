import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
ngOnInit(): void {
  gsap.from('.vh-100',1.5, {
    opacity: 0,
    stagger:
    {
      amount: 0.5
    },
    ease:'power1.inOut'
  });

}

}
