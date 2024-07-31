import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Database, get, onValue, ref, set, update } from '@angular/fire/database';
import { FormControl,FormsModule,  FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  messageform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  
  });
  constructor(private database: Database){

  }
  sendmessage(formValues: any){

    if (formValues.name === '') {
      alert('Please enter name');
      return;
    }
    if (formValues.phone === '') {
      alert('Please enter phone');
      return;
    }
    
    set(ref(this.database,'users/'+ formValues.name),{
      name : formValues.name,
      phone : formValues.phone,
      message : formValues.message,
   
  
    })
    alert('Message send Succesfully');
    this.messageform.reset();
  
            
   
   
  
  }
  
}
