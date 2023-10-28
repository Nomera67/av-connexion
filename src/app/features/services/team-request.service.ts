import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamRequestService {

  constructor(private http: HttpClient) { }

  getTeamList(): Observable<any>{
    return this.http.get('assets/ressources/team/team-list.json');
  }

}
