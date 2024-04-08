import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TravelserviceService } from '../travelservice.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToTrain(): void {
    this.router.navigate(['/train']); // Navigate to the train component
  }

  navigateToBus(): void {
    this.router.navigate(['/bus']); // Navigate to the bus component
  }
}
