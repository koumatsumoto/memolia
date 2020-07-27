// e.g. "[line containing only bracket text]"
export type FullEpisodeBlock = {
  fullEpisode: true;
  partialEpisode: false;
  text: string;
  references: string[];
};

// e.g. "line containing partial [bracket text]"
export type PartialEpisodeBlock = {
  fullEpisode: false;
  partialEpisode: true;
  text: string;
  references: string[];
};

// e.g. "line containing text without bracket"
export type TextBlock = {
  fullEpisode: false;
  partialEpisode: false;
  text: string;
  references: string[];
};

export type Block = FullEpisodeBlock | PartialEpisodeBlock | TextBlock;

export const extractReferences = (text: string) => {
  const references: string[] = [];
  let expectingBracketEnd = false;
  let constructingTerm = '';
  for (const char of text) {
    if (char === '[') {
      constructingTerm = '';
      expectingBracketEnd = true;
    } else if (expectingBracketEnd) {
      if (char === ']') {
        if (constructingTerm.length) {
          const term = constructingTerm.trim();
          if (term.length) {
            references.push(term);
          }
          constructingTerm = '';
          expectingBracketEnd = false;
        }
      } else {
        constructingTerm = constructingTerm + char;
      }
    }
  }

  return references;
};

export const makeBlock = (text: string): Block => {
  const references = extractReferences(text);
  if (references.length === 1 && text[0] === '[' && text[text.length - 1] === ']') {
    return {
      fullEpisode: true,
      partialEpisode: false,
      text,
      references,
    };
  } else if (references.length) {
    return {
      fullEpisode: false,
      partialEpisode: true,
      text,
      references,
    };
  } else {
    return {
      fullEpisode: false,
      partialEpisode: false,
      text,
      references,
    };
  }
};

// text -> lines -> blocks
export const parse = (text: string) => {
  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .map(makeBlock);

  return lines;
};

/**
 * text of episode
 */
export class Compilation {
  readonly blocks: Block[];

  constructor(text: string) {
    this.blocks = parse(text);
  }
}
