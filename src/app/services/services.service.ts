import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private router: Router, private http: HttpClient) {
  }

  async searchPeopleByName(name: string) {

    return await this.fnSearchPeopleByName(name);

  }

  private fnSearchPeopleByName(name: string): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`https://search.torre.co/people/_search`, {
      "and": [
        {
          "name": {
            "term": name
          }
        }
      ]
    }, { headers }).toPromise();
  }

  async getBioUser(userName: string) {

    return await this.funGetBioUser(userName);

  }

  private funGetBioUser(userName: string): Promise<any> {
    const headers = new HttpHeaders()

    return this.http.get(`https://bio.torre.co/api/bios/${userName}}`, { headers }).toPromise();


  }

}
