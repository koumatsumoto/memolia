import { Activity } from './activity';
import { Location } from './location';

/**
 * Describe episodes in terms of when, where, what doing
 */
export class Situation {
  readonly time: Date;
  readonly location: Location | null = null;
  readonly activity: Activity;

  constructor(param: { activity: string }) {
    this.activity = param.activity as Activity;
    this.time = new Date();
  }
}
