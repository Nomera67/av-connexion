import { Component, OnInit } from '@angular/core';
import { CertificationRequestService } from 'src/app/features/services/certification-request.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  certifications: any[] = [];

  constructor(private certificationsService: CertificationRequestService){}

  ngOnInit(): void {
    this.certificationsService.getCertificationsList().subscribe((data: any) => {
      this.certifications = data;
    })

    
  }

}
