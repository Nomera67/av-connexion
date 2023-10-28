import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CertificationRequestService {

  constructor(private http: HttpClient) { }

  getCertificationsList(): Observable<any>{
    return this.http.get('assets/ressources/certifications/certifications-list.json');
  }

}
