import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../shared/services';

import { News } from '../../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  newsList: Array<News> = [];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
    this.newsService.getNews().then(response=>{
      this.newsList = response.articles;
    });
  }

  refresh(){
    this.newsList = [];
    this.getNews();
  }

}
