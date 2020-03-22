import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Term } from '../../../../model/memory/term';
import { DatabaseService } from '../../../service/database.service';

const termFormControlName = 'term';

@Component({
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.scss'],
})
export class AddTermComponent implements OnInit {
  constructor(private readonly db: DatabaseService, private readonly router: Router) {}

  termForm!: FormGroup;
  termControl!: FormControl;

  ngOnInit() {
    this.termControl = new FormControl();
    this.termForm = new FormGroup({
      [termFormControlName]: this.termControl,
    });
  }

  onSubmit() {
    if (this.termForm.invalid) {
      // TODO: show notification
      return;
    }

    const name = this.termControl.value;
    const term = new Term(name);
    this.db.term.set(name, term);

    this.router.navigate(['/terms', name]);
  }
}
