import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{

  members: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('assets/ressources/team/team-list.json').subscribe((data: any) => {
      this.members = data;
    })
  }

}
