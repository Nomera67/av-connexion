import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesRequestsService } from 'src/app/features/services/articles-requests.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit{

  articles: any[] = [];
  listArticles: any[] = [];

  constructor(private articlesService: ArticlesRequestsService, public _router: Router){}

  ngOnInit(): void {
    this.articlesService.getArticlesList().subscribe((data: any) => {
      this.articles = data;
      this.articles.sort((a, b) => b.id - a.id);
      this.listArticles = this.articles.slice(4);
    })
  }

  toArticle(id: string){
    this._router.navigate(['/article', id]);
  }

}
