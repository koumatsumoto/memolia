import { Compilation } from './compilation';
import { Situation } from '../situation/situation';

/**
 * contextable description of term
 */
export class Episode {
  isRoot: boolean;
  situation: Situation;
  context: Episode;
  compilation: Compilation;
}
