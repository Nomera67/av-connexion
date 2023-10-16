import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }
}
