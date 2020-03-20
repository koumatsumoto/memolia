import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  readonly term = new Map();

  constructor() {
    // debug, remove if app is ready to production
    (window as any).db = this;
  }
}
