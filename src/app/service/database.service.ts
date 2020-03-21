import { Injectable } from '@angular/core';
import { Term } from '../../model/memory/term';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  readonly term = new Map<string, Term>();

  constructor() {
    // debug, remove if app is ready to production
    (window as any).db = this;
  }
}
