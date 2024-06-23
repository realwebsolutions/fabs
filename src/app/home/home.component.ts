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
  gsap.from('path',1.5, {
    y:700,
    stagger:
    {
      amount: 0.5
    },
    ease:'power1.inOut'
  });


  gsap.from('image',1.5, {
    y:700,
    stagger:
    {
      amount: 0.5
    },
    ease:'power1.inOut'
  });
  gsap.from('.display-4',1.5, {
    y:700,
    stagger:
    {
      amount: 0.5
    },
    ease:'power1.inOut'
  });
  }

}
