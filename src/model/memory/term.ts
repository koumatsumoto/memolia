import { Definition } from './definition';
import { Episode } from './episode';

/**
 * Represent declarative memory
 */
export class Term {
  definition: Definition;
  episodes: Episode[];
}
