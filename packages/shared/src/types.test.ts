import { describe, expectTypeOf, it } from 'vitest';
import type { PrivateCard, PublicRoomState } from './index';

// These assertions are enforced by `pnpm typecheck`, which compiles this file.
describe('shared type contract', () => {
  it('only allows words and full roles inside the end-of-game result', () => {
    expectTypeOf<keyof PublicRoomState>().toEqualTypeOf<
      | 'code'
      | 'phase'
      | 'hostId'
      | 'settings'
      | 'round'
      | 'players'
      | 'activePlayerId'
      | 'clues'
      | 'phaseEndsAt'
      | 'votesCast'
      | 'result'
    >();
  });

  it('exposes a role per player only through revealedRole', () => {
    expectTypeOf<keyof PublicRoomState['players'][number]>().toEqualTypeOf<
      'id' | 'name' | 'alive' | 'connected' | 'revealedRole'
    >();
  });

  it('gives a player only their word, never a role', () => {
    expectTypeOf<keyof PrivateCard>().toEqualTypeOf<'word'>();
  });
});
