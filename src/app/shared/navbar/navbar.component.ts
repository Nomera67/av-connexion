import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  topValue: number = 100;
  navBarClass: string = 'nav-bar-centered';
  activeSection: string | null = null;


  constructor(private elementRef: ElementRef, private viewportScroller: ViewportScroller, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRouterAndScrollPosition();
      }
    });
  }

  ngOnInit(): void {
    this.checkRouterAndScrollPosition();
  }

  getOffset(elementId: string): number {
    const element = document.getElementById(elementId);
    return element ? element.offsetTop : 0;
  }

  checkRouterAndScrollPosition() {
    if (this.router.url === '/laboratoire') {
      this.activeSection = 'laboratoire';
      console.log(this.activeSection);
    } else if (this.router.url === '/accueil' && window.scrollY === 0) {
      this.activeSection = 'heroe';
      console.log(this.activeSection);
    } else {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      if (scrollPosition >= this.getOffset('contact') - windowHeight / 2) {
        this.activeSection = 'contact';
        console.log(this.activeSection);
      } else if (scrollPosition >= this.getOffset('team') - windowHeight / 2) {
        this.activeSection = 'team';
        console.log(this.activeSection);
      } else if (scrollPosition >= this.getOffset('certifications') - windowHeight / 2) {
        this.activeSection = 'certifications';
        console.log(this.activeSection);
      } else if (scrollPosition >= this.getOffset('competences') - windowHeight / 2) {
        this.activeSection = 'competences';
        console.log(this.activeSection);
      } else {
        this.activeSection = 'heroe';
        console.log(this.activeSection);
      }
    }
  }

  scrollToElement(elementId: string): void {
    if (this.router.url !== '/accueil') {
      this.router.navigate(['/accueil']).then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(elementId);
        }, 150);
      });
    } else {
      this.viewportScroller.scrollToAnchor(elementId);
    }
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

  this.checkRouterAndScrollPosition();
}}
