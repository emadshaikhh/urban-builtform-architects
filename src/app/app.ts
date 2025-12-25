import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// IMPORTS for your components
import { NavbarComponent } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Service } from './components/service/service';
import { ProjectsComponent } from './components/projects/projects';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavbarComponent,
    Home,
    About,
    Service,
    ProjectsComponent,
    Contact
  ],
  // Pointing to your files: 'app.html' and 'app.css'
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'urban-builtform-architects';
}