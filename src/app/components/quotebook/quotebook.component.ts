import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { Quote } from 'src/app/shared/models/quote.model';
import { ResponsiveComponent } from '../responsive/responsive.component';

@Component({
  selector: 'mtg-quotebook',
  templateUrl: './quotebook.component.html',
  styleUrls: ['./quotebook.component.scss']
})
export class QuotebookComponent extends ResponsiveComponent implements OnInit {

  quotes: Quote[] = [];

  constructor(
    responsiveService: ResponsiveService,
    private http: HttpClient
  ) {
    super(responsiveService);
    this.http.get<Quote[]>('/assets/json/quotes.json').subscribe(quotes => this.quotes = quotes);
  }

}
