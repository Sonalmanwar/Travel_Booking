import { Component } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';


interface Train {
  id: number;
  name: string;
  // date: string;
  route: string;
  class: { name: string; price: string }[];
  // price: string;
  // class1: string;
  // price1: string;
  image: string;
}
@Component({
  selector: 'app-train',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './train.component.html',
  styleUrl: './train.component.css'
})
export class TrainComponent {
  // availableTrains = [
  //   { from: 'Location A', to: 'Location B', time: '10:00 AM', type: 'Sleeper', price: '$50' },
  //   { from: 'Location C', to: 'Location D', time: '11:00 AM', type: 'AC', price: '$70' },
  // ];

  // book(train: any): void {
  //   console.log('Booking train:', train);
  //   alert('Booking successful!');
  // }
  
  trains: Train[] =  [
    {
      id: 18519,
      name: 'Mum LTT Exp',
      // date: '30 April 2024',
      route: 'Pune(6:20 AM) TO Mumbai(6:20 AM)',
      class:  [
        { name: '3A', price: 'Rs 1600' },
        { name: '2A', price: 'Rs 900' },
        { name: 'Sleeper,AC', price: 'Rs 1200' }
    ], 
      // price: 'Rs 1200',
      // class1: '2A',
      // price1: 'Rs 800',
      image: 'assets/train.jpg'
    },
    {
      id: 16508,
      name: 'Jodhpur Exp',
      // date: '30 May 2024',
      route: 'Pune(6:50 PM) TO Ahmedabad(5:00 AM)',
      class: [
        { name: '3A', price: 'Rs 2900' },
        { name: '2A', price: 'Rs 2400' },
        { name: 'Sleeper,AC', price: 'Rs 3400' }
    ], 
     
      image: 'assets/train.jpg'
    },

    {
      id: 20802,
      name: 'Magadh Exp',
      // date: 'Date:3 May 2024',
      route: 'Delhi(9:05 PM) TO Patna(12:55 PM)',
      class: [
        { name: '3A', price: 'Rs 1800' },
        { name: '2A', price: 'Rs 1390' },
        { name: 'Sleeper,AC', price: 'Rs 2500' }
    ], 
      
      image: 'assets/train.jpg'
    },

    {
      id: 11054,
      name: 'Pnvl Gkp EXP',
      // date: '24 April 2024',
      route: 'Nashik(7:25 PM) TO Gorakhpur(11:00 PM)',
      class: [
        { name: '3A', price: 'Rs 1300' },
        { name: '2A', price: 'Rs 1800' },
        { name: 'Sleeper,AC', price: 'Rs 1600' }
    ], 
      image: 'assets/train.jpg'
    },

    {
      id: 12163,
      name: 'Ltt Mas Exp',
      // date: 'Date:5 May 2024',
      route: 'Pune(10:10 PM) TO Chennai(4.:30 PM)',
      class: [
        { name: '3A', price: 'Rs 2000' },
        { name: '2A', price: 'Rs 1400' },
        { name: 'Sleeper,AC', price: 'Rs 2400' }
    ], 
     
      image: 'assets/train.jpg'
    }
    // // Add more train data as needed
  ];

  selectedTrain: Train | null = null;
  bookingFormVisible = false;
  bookingSuccess = false;
  // numSeats = 1;




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

  book(train: Train): void {
    this.selectedTrain = train;
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


  // totalPrice: string = '';
  // book(train: Train): void {
  //   this.selectedTrain = train;
  //   this.bookingFormVisible = true;
  //   if (this.myModal) {
  //     this.myModal.nativeElement.classList.add('show'); // Show the modal
  //   }
  // }

  // close(): void {
  //   this.bookingFormVisible = false;
  //   this.bookingSuccess = false;
  //   if (this.myModal) {
  //     this.myModal.nativeElement.classList.remove('show'); // Hide the modal
  //   }
  // }

  // submitBookingForm(): void {
  //   // Perform booking logic here
  //   // For demonstration, just show success message
  //   this.bookingSuccess = true;
  //   this.bookingFormVisible = false;
  // }

  // calculateTotalPrice(): number {
  //   // Your calculation logic here
  //   return 0;
  // }

  // incrementSeats(): void {
  //   this.numSeats++;
  // }


  // submitBookingForm(): void {
  //   // Perform booking logic here
  //   // For demonstration, just show success message
  //   this.bookingSuccess = true;
  //   this.bookingFormVisible = false;
  
  //   // Calculate total price
  //   const totalPrice = this.calculateTotalPrice();
  //   console.log('Total Price:', totalPrice);
  // }
  
  // calculateTotalPrice(): number {
  //   if (!this.selectedTrain) return 0;
  
  //   // Calculate total price based on selected train and number of seats
  //   let totalPrice = 0;
  //   this.selectedTrain.class.forEach(trainClass => {
  //     totalPrice += parseFloat(trainClass.price.replace('Rs ', '')) * this.numSeats;
  //   });
  //   return totalPrice;

}


