import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  opacity: number = 0;

  ngOnInit(): void {
  }


  constructor(private elementRef: ElementRef, private viewportScroller: ViewportScroller) {
  }

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const headerBottom = this.elementRef.nativeElement.querySelector('.header-bottom') as HTMLElement;


    if(headerBottom){
      const rect = headerBottom.getBoundingClientRect();
      const topScreen = rect.top;
      if (topScreen <= 0) {
        headerBottom.style.position = 'fixed';
        headerBottom.style.top = '0';
      } else {
        headerBottom.style.position = 'relative';
      }
    }


    const scrollPosition = window.pageYOffset;
    const maxScroll = document.body.clientHeight - window.innerHeight;
    const opacity = (scrollPosition / maxScroll) * 10;
    this.opacity = opacity < 0 ? 0 : (opacity > 1 ? 1 : opacity);
  }
}
