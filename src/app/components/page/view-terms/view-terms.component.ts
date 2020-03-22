import { Component, OnInit } from '@angular/core';
import { Term } from '../../../../model/memory/term';
import { DatabaseService } from '../../../service/database.service';

@Component({
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
