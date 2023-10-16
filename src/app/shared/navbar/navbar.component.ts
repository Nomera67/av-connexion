import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  topValue: number = 100;
  navBarClass: string = 'nav-bar-centered';

  ngOnInit(): void {
  }


  constructor(private elementRef: ElementRef, private viewportScroller: ViewportScroller) {
  }

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const headerTop = this.elementRef.nativeElement.querySelector('.header-top') as HTMLElement;
    const headerTopHeight = headerTop.offsetHeight;
    const scrollPosition = window.pageYOffset;
    const logo = document.getElementById('secondaryLogo');
    const navBar = document.getElementById('navBar');

    if (scrollPosition > headerTopHeight) {
        navBar?.classList.add('righted');
        logo?.classList.add('visible');
        logo?.classList.remove('hidden');
    } else {
        navBar?.classList.remove('righted');
        this.navBarClass = 'nav-bar-centered';
        logo?.classList.add('hidden');
        logo?.classList.remove('visible');
    }

    if(headerTop){
      const scrollPosition = window.pageYOffset;

      this.topValue = headerTopHeight - scrollPosition;

      if (this.topValue < 0){
        this.topValue = 0;
      }
  }
}}
