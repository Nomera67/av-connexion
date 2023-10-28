import { Component, OnInit } from '@angular/core';
import { TeamRequestService } from 'src/app/features/services/team-request.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{

  members: any[] = [];

  constructor(private teamService: TeamRequestService){}

  ngOnInit(): void {
    this.teamService.getTeamList().subscribe((data: any) => {
      this.members = data;
    })
  }

}
