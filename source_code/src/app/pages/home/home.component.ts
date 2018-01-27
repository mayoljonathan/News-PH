import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../shared/services';

import { News } from '../../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuOpen: boolean = false;
  isLoading: boolean = false;

  categories = [
    {name: 'general'},
    {name: 'business'},
    {name: 'entertainment'},
    {name: 'health'},
    {name: 'science'},
    {name: 'sports'},
    {name: 'technology'},
  ];

  selectedCategory: string = 'general';
  newsList: Array<News> = [];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getNews(this.selectedCategory);
  }

  getNews(category: string){
    this.isLoading = true;
    // When clicking sidenav category, change selectedCategory to the clicked category
    if(category != this.selectedCategory) { 
      this.selectedCategory = category;
      this.menuOpen = false;
    }

    this.newsService.getNews(category).then(response=>{
      this.isLoading = false;
      this.newsList = response.articles;
    },error=>{
      alert(error);
      this.isLoading = false;
    });
  }

}
