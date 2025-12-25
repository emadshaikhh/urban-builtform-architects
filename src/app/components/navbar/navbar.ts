import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this to use *ngIf

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  isMenuOpen = false; // Variable to track menu state

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Switch between true/false
  }
}