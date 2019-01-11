import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  detailsForm: FormGroup;
  articles: Article[] = [
    { title: 'angular', link: 'angular.io', votes: 4 },
    { title: 'vue', link: 'vue.io', votes: 2 }
  ]

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      title: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  submitDetailsForm(value, valid) {
    if (valid) {
      this.articles.push({
        title: this.detailsForm.get('title').value,
        link: this.detailsForm.get('link').value,
        votes: 0
      })
      this.detailsForm.reset();
    }
  }
}
