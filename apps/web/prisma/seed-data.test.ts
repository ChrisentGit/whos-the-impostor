import { describe, expect, it } from 'vitest';
import { seedThemes } from './seed-data';

const normalize = (word: string) => word.trim().toLowerCase();

describe('seed data', () => {
  it('has 3 themes with unique slugs', () => {
    expect(seedThemes).toHaveLength(3);
    expect(new Set(seedThemes.map((theme) => theme.slug)).size).toBe(3);
  });

  it.each(seedThemes.map((theme) => [theme.slug, theme] as const))(
    '%s has 15 valid, distinct pairs',
    (_slug, theme) => {
      expect(theme.pairs).toHaveLength(15);

      const keys = theme.pairs.map(({ wordA, wordB }) => {
        expect(wordA.trim()).not.toBe('');
        expect(wordB.trim()).not.toBe('');
        expect(normalize(wordA)).not.toBe(normalize(wordB));
        return [normalize(wordA), normalize(wordB)].sort().join('|');
      });

      expect(new Set(keys).size).toBe(keys.length);
    },
  );
});
