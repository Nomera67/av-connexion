import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit{

  articles: any[] = [];
  listArticles: any[] = [];

  constructor(private http: HttpClient, public _router: Router){}

  ngOnInit(): void {
    this.http.get('assets/ressources/labo/articles-list.json').subscribe((data: any) => {
      this.articles = data;
      this.articles.sort((a, b) => b.id - a.id);
      this.listArticles = this.articles.slice(4);
    })
  }

  toArticle(id: string){
    this._router.navigate(['/article', id]);
  }

}
