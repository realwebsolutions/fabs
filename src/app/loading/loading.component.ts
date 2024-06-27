import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, AfterViewInit {
  @ViewChild('digit1') digit1!: ElementRef;
  @ViewChild('digit2') digit2!: ElementRef;
  @ViewChild('digit3') digit3!: ElementRef;
  constructor(private router: Router) { }
  numAnimation = (digit: ElementRef, duration: number, delay = .5) => {
    const numHeight = digit.nativeElement.querySelector(".num").clientHeight;
    const totalDistance =
      (digit.nativeElement.querySelectorAll(".num").length - 1) * numHeight;
    gsap.to(digit.nativeElement, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: 'power1.inOut',
      
    });
    
    gsap.to('.progress-bar',{
      width:'30%',
      duration: 2,
      ease:'power4.inOut',
      delay:7,

    });
    gsap.to('.progress-bar',{
      width:'100%',
      opacity: 0,
      duration: 2,
      delay: 8.5,
      ease:'power3.inOut',
      onComplete:()=>{
        gsap.set('.pre-loader',{
          display:'none',
          
        });
      
      }

    })
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.numAnimation(this.digit3, 5);
    this.numAnimation(this.digit2, 6);
    this.numAnimation(this.digit1, 2, 5);
  }
}
