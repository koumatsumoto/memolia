import { extractReferences, makeBlock } from "./compilation";

describe('compilation internal functions', () => {
  describe('extractReferences', () => {
    it('should work', () => {
      expect(extractReferences('not containing bracket')).toEqual([]);
      expect(extractReferences('containing [')).toEqual([]);
      expect(extractReferences('containing ]')).toEqual([]);
      expect(extractReferences('containing [  ]')).toEqual([]);
      expect(extractReferences('containing []')).toEqual([]);
      expect(extractReferences('containing [bracket]')).toEqual(['bracket']);
      expect(extractReferences('containing [ bracket ]')).toEqual(['bracket']);
    });
  });

  describe('makeBlock', () => {
    it('should work', () => {
      expect(makeBlock('simple text')).toEqual({
        fullEpisode: false,
        partialEpisode: false,
        references: [],
        text: 'simple text',
      });
      expect(makeBlock('has [reference]')).toEqual({
        fullEpisode: false,
        partialEpisode: true,
        references: ['reference'],
        text: 'has [reference]',
      });
      expect(makeBlock('[full reference]')).toEqual({
        fullEpisode: true,
        partialEpisode: false,
        references: ['full reference'],
        text: '[full reference]',
      });
    });
  });
});
