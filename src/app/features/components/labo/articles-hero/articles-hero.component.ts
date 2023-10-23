import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-hero',
  templateUrl: './articles-hero.component.html',
  styleUrls: ['./articles-hero.component.scss']
})
export class ArticlesHeroComponent implements OnInit {

  articles: any[] = [];
  mainArticle: any;

  constructor(private http: HttpClient, public _router: Router){}

  ngOnInit(): void {
    this.http.get('assets/ressources/labo/articles-list.json').subscribe((data: any) => {
      this.articles = data;
      this.articles.sort((a, b) => b.id - a.id);
      this.mainArticle = this.articles[0];
      console.log(this.articles)
    })
  }

  toArticle(id: string){
    this._router.navigate(['/article', id])
  }

}
