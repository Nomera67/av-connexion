import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesRequestsService } from 'src/app/features/services/articles-requests.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any;

  constructor(private route: ActivatedRoute, private articlesService: ArticlesRequestsService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = params['id'];

      this.articlesService.getArticlesList().subscribe((data: any) => {
        this.article = data.find((article: any) => article.id === articleId);
      })
    })
  }

}
