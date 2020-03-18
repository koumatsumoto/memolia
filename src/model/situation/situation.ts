import {Location} from './location';
import { Activity } from './activity';

/**
 * Describe episodes in terms of when, where, what doing
 */
export class Situation {
  readonly time: Date;
  readonly location: Location | null = null;
  readonly activity: Activity;
}
