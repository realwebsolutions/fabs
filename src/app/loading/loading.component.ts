import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, viewChild, ViewChildren, QueryList } from '@angular/core';
import gsap from 'gsap';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})

  export class LoadingComponent implements OnInit {
    progress = 0;
    isLoading = false;
    isCarouselVisible = false;
  
    ngOnInit() {
      this.initCarousel();

    }
  
    startLoading() {
      this.isLoading = true;
      interval(15).pipe(
        take(101)
      ).subscribe(
        (value) => {
          this.progress = value;
        },
        (error) => console.error(error),
        () => {
          console.log('Loading complete');
          this.isLoading = false;
          this.isCarouselVisible = true;
        }
      );
    }
  
 
      @ViewChildren('slide') slides!: QueryList<ElementRef>;
    
    
    
      ngAfterViewInit() {
        this.slides.changes.subscribe(() => {
          this.initCarousel();
        });
      }
    
      initCarousel() {
        const slides = this.slides.toArray().map(slide => slide.nativeElement);
    
        gsap.to(slides, {
          x: '-1000',
          ease: 'none',
          stagger: {
            each: 1,
            from: 'start',
            grid: 'auto'
          }
        });
      }
    }
