import { Situation } from '../situation/situation';
import { Compilation } from './compilation';

/**
 * contextable description of term
 */
export class Episode {
  isRoot: boolean;
  situation: Situation;
  context: Episode;
  compilation: Compilation;
}
