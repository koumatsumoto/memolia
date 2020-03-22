import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Episode } from '../../../../model/memory/episode';
import { Term } from '../../../../model/memory/term';
import { DatabaseService } from '../../../service/database.service';

@Component({
  templateUrl: './view-term.component.html',
  styleUrls: ['./view-term.component.scss'],
})
export class ViewTermComponent implements OnInit {
  term!: Term;

  episodeForm!: FormGroup;
  episodeControl!: FormControl;
  activityControl!: FormControl;

  constructor(private readonly db: DatabaseService, private readonly route: ActivatedRoute) {}

  async ngOnInit() {
    // initialize episode form
    this.activityControl = new FormControl('', [Validators.required]);
    this.episodeControl = new FormControl('', [Validators.required]);
    this.episodeForm = new FormGroup({
      activity: this.activityControl,
      episode: this.episodeControl,
    });

    const paramMap = await this.route.paramMap.pipe(first()).toPromise();
    const name = paramMap.get('name') || '';
    let term = this.db.term.get(name);

    // create term newly if not found
    if (!term) {
      term = new Term(name);
      this.db.term.set(name, term);
    }

    this.term = term;
    // debug
    console.log('[debug] term', term);
  }

  onSubmitEpisode() {
    if (this.episodeForm.invalid) {
      return;
    }

    const activity = this.activityControl.value;
    const text = this.episodeControl.value;
    const episode = new Episode({
      root: true,
      activity,
      text,
    });
    this.term.addEpisode(episode);
  }
}
