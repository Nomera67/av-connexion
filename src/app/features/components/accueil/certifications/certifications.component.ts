import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certifications: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('assets/ressources/certifications/certifications-list.json').subscribe((data: any) => {
      this.certifications = data;
    })

    
  }

}
