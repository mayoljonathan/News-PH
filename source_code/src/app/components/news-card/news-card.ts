import { Component, Input } from '@angular/core';

import { News } from '../../shared/interfaces'

@Component({
  selector: 'news-card',
  templateUrl: './news-card.html',
  styleUrls: ['./news-card.scss']
})
export class NewsCardComponent {

  @Input('news') news:News;

	constructor() {}
	
	launchExternal(url){
		window.open(url);
	}

}
