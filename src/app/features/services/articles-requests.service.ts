import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesRequestsService {

  constructor(private http: HttpClient) { }

  getArticlesList(): Observable<any>{
    return this.http.get('assets/ressources/labo/articles-list.json');
  }



}
