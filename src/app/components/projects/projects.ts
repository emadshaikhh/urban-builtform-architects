import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css' // We will add magic styles here
})
export class ProjectsComponent implements AfterViewInit {
  // This selects all elements with the hashtag #projectCard in HTML
  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // The "Observer" watches when elements enter the screen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the card is visible on screen
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view'); // Add the magic class
        } else {
          entry.target.classList.remove('in-view'); // Remove it when scrolling away (optional)
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the card is visible
    });

    // Start watching all cards
    this.projectCards.forEach((card) => {
      observer.observe(card.nativeElement);
    });
  }
}