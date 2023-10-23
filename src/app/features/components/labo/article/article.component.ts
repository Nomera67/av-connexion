import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any;

  constructor(private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = params['id'];

      this.http.get(`assets/ressources/labo/articles-list.json`).subscribe((data: any) => {
        this.article = data.find((article: any) => article.id === articleId);
      })
    })
  }

}
