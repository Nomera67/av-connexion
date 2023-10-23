import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHeroComponent } from './articles-hero.component';

describe('ArticlesHeroComponent', () => {
  let component: ArticlesHeroComponent;
  let fixture: ComponentFixture<ArticlesHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesHeroComponent]
    });
    fixture = TestBed.createComponent(ArticlesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
