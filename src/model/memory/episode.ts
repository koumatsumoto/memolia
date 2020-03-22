import { Situation } from '../situation/situation';
import { Compilation } from './compilation';

/**
 * contextable description of term
 */
export class Episode {
  readonly isRoot: boolean;
  readonly situation: Situation;
  readonly context: Episode;
  readonly compilation: Compilation;

  constructor(param: { readonly root: boolean; readonly activity: string; readonly text: string }) {
    this.isRoot = param.root;
    this.situation = new Situation({ activity: param.activity });
    this.compilation = new Compilation(param.text);
  }
}
