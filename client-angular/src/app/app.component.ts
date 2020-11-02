import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  results: string[];
  private BASE_URL:string = '/api';
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
      this.http.get('https://3000-ea60740e-d6b4-4fe0-90f3-3404d5ca50b3.ws-eu01.gitpod.io/api').subscribe(data => {
        this.results = data['results'];
      });
    }
}
