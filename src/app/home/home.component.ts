import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('digit1') digit1!: ElementRef;
  @ViewChild('digit2') digit2!: ElementRef;
  @ViewChild('digit3') digit3!: ElementRef;
  @ViewChild('mySvg') mySvg!: ElementRef;


  numAnimation = (digit: ElementRef, duration: number, delay = 0.5) => {
    const numHeight = digit.nativeElement.querySelector(".num").clientHeight;
    const totalDistance =
      (digit.nativeElement.querySelectorAll(".num").length - 1) * numHeight;

    return gsap.to(digit.nativeElement, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: 'power1.inOut',
    });
  }

  progressBarAnimation() {
    gsap.set(".home-cont", {
      display: "none",
    })
    const tl = gsap.timeline();

    tl.to('.progress-bar', {
      width: '30%',
      duration: 1,
      ease: 'power4.inOut',
      delay: 3,
    }).to('.progress-bar', {
      width: '100%',
      opacity: 0,
      duration: 1,
      delay: .5,
      ease: 'power3.inOut',
    });

    return tl;
  }

  finalAnimation() {
    gsap.set('.hero', {
      display: 'none',
    });
    gsap.set('.home-cont', {
      display: 'block', // or 'flex', depending on your layout needs
    });
    gsap.from(".home-cont", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut"
    });
  }

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    const masterTimeline = gsap.timeline();

    masterTimeline
      .add(this.numAnimation(this.digit3, 5))
      .add(this.numAnimation(this.digit2, 5), "-=5")
      .add(this.numAnimation(this.digit1, 1), "-=1")
      .add(this.progressBarAnimation(), "-=1")
      .add(this.finalAnimation);
  }
}