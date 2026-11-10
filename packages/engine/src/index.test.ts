import { describe, expect, it } from 'vitest';
import { INITIAL_PHASE } from './index';

describe('engine', () => {
  it('starts in the lobby', () => {
    expect(INITIAL_PHASE).toBe('LOBBY');
  });
});
