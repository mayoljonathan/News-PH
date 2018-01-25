import { Injectable } from '@angular/core';

// https://newsapi.org/docs/client-libraries/node-js
// Declare NewsAPI 
import * as NewsAPI from 'newsapi';
const newsapi = new NewsAPI('2cd565c23747486799f2ee478f1b62e4');

@Injectable()
export class NewsService {

    getNews() : Promise<any>{
        return newsapi.v2.topHeadlines({
            country: 'ph'
        });
    }

}