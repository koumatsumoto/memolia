import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../service/database.service';
import { Term } from '../../../model/memory/term';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-view-term',
  templateUrl: './view-term.component.html',
  styleUrls: ['./view-term.component.scss'],
})
export class ViewTermComponent implements OnInit {
  term: Term;

  constructor(private readonly db: DatabaseService, private readonly route: ActivatedRoute) {}

  async ngOnInit() {
    const paramMap = await this.route.paramMap.pipe(first()).toPromise();
    const name = paramMap.get('name') || '';
    const term = this.db.term.get(name);

    if (!term) {
      // TODO: handle error
      throw new Error('Invalid name used');
    }

    this.term = term;
  }
}
