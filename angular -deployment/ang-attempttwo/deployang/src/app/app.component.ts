import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitForm(name: string, email: string, message: string) {
    // You can implement form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // For example, you can make an HTTP request to submit the form data
  }
}
