export class Block {
  text: string;
}

/**
 * text of episode
 */
export class Compilation {
  blocks: Block[] = [];

  constructor(text: string) {
    // TODO: parse text to block
    this.blocks.push({ text });
  }
}
