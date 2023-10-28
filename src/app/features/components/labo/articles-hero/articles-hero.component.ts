import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesRequestsService } from 'src/app/features/services/articles-requests.service';

@Component({
  selector: 'app-articles-hero',
  templateUrl: './articles-hero.component.html',
  styleUrls: ['./articles-hero.component.scss']
})
export class ArticlesHeroComponent implements OnInit {

  articles: any[] = [];
  lastArticles: any[] = [];
  mainArticle: any;

  constructor(private articlesService: ArticlesRequestsService, public _router: Router){}

  ngOnInit(): void {
    this.articlesService.getArticlesList().subscribe((data: any) => {
      this.articles = data;
      this.articles.sort((a, b) => b.id - a.id);
      this.mainArticle = this.articles[0];
      this.lastArticles = this.articles.slice(1, 4);
    })
  }

  toArticle(id: string){
    this._router.navigate(['/article', id])
  }

}
