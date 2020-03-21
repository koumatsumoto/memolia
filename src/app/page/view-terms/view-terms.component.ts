import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../service/database.service';
import { Term } from '../../../model/memory/term';

@Component({
  selector: 'app-view-terms',
  templateUrl: './view-terms.component.html',
  styleUrls: ['./view-terms.component.scss'],
})
export class ViewTermsComponent implements OnInit {
  terms: Term[] = [];

  constructor(private readonly db: DatabaseService) {}

  ngOnInit(): void {
    this.terms = Array.from(this.db.term.values());
  }
}
