import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private router : Router){}
hair(){
  this.router.navigate(['/hair']);
}
face(){
  this.router.navigate(['/face']);
}
beard(){
  this.router.navigate(['/beard']);
}
}
