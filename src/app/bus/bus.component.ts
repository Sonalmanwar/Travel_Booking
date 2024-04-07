import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-bus',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.css'
})
export class BusComponent {


  buses = [
    {
      name: 'Purple Metrolink',
      // date: '15 April 2024',
      route: 'Pune(08:00 AM) To Mumbai(12:45 PM)',
      description: 'Volvo AC Seater (2+2)',
      price: 'Rs800',
      image: 'assets/bus.jpg'
    },
    {
      name: 'Lakshmi Travels',
      // date: '25 April 2024',
      route: 'Mumbai(06:00 PM) To Shirdi(06:05 AM)',
      description: 'A/C Sleeper (2+1)',
      price: 'Rs800',
      image: 'assets/bus.jpg'
    },
    {
      name: 'Sanjay Travels',
      // date: '25 April 2024',
      route: 'Nagpur(06:30 PM) To Mumbai(07:00 AM)',
      description: 'A/C Sleeper (2+1)',
      price: 'Rs1200',
      image: 'assets/bus.jpg'
    },
    {
      name: 'Shatabdi Travels',
      // date: '30 April 2024',
      route: 'Pune(11:30 PM) To Nashik(04:45 AM)',
      description: 'NON A/C Sleeper (2+1)',
      price: 'Rs700',
      image: 'assets/bus.jpg'
    }
    // Add more bus options as needed
  ];


  bookingFormVisible = false;
  bookingSuccess = false;
  @ViewChild('myModal') myModal: any; // Reference to the modal

  // book(): void {
  //   // Perform booking logic here
  //   // For now, just open the modal
  //   this.myModal.nativeElement.classList.add('show'); // Show the modal
  // }

  // close(): void {
  //   // Close the modal
  //   this.myModal.nativeElement.classList.remove('show');
  // }


  book(): void {
    this.bookingFormVisible = true;
    this.myModal.nativeElement.classList.add('show'); // Show the modal
  }

  close(): void {
    this.bookingFormVisible = false;
    this.bookingSuccess = false;
    this.myModal.nativeElement.classList.remove('show'); // Hide the modal
  }

  submitBookingForm(): void {
    // Perform booking logic here
    // For demonstration, just show success message
    this.bookingSuccess = true;
    this.bookingFormVisible = false;
  }
}
