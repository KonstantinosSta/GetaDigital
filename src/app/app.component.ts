import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  reddits: any = [];


  constructor(private http: Http) {
    this.getArticle();
    this.getDetails();
  }


    getArticle() {
      return this.http.get('https://www.reddit.com/r/ProgrammerHumor/top.json?limit=10').map((res: Response) => res.json());
    }
    getDetails() {
      this.getArticle().subscribe(data => {
        this.reddits = data.data.children;
        console.log(this.reddits[0].data);
      });
    }

}
