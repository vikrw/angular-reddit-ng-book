import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  

  constructor() { }

  ngOnInit() {
  }

  voteUp() {
    this.article.votes++;
    return false;
  }

  voteDown() {
    if (this.article.votes === 0) {
      return;
    } else {
      this.article.votes--;
    }
    return false;
  }

  domain(link): string {
    const domainAndPath: string = link.split('//')[1];
    this.article.domainName = domainAndPath.split('/')[0];
    return this.article.domainName;
  }

}
