import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  news: any = [];

  constructor(private newsService: ApiService) {

    // get the news
    this.news = [];
    this.newsService.getNews().subscribe(
      resp => {
        this.news = resp;
        console.log(this.news);
  });
}

}
