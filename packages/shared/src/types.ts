export type Phase =
  'LOBBY' | 'DEALING' | 'CLUE' | 'DISCUSSION' | 'VOTING' | 'ELIMINATION' | 'GAME_OVER';

export type Role = 'CREW' | 'IMPOSTOR';

export interface RoomSettings {
  themeId: string | null;
  impostorCount: 1 | 2;
  clueSeconds: number;
  discussionSeconds: number;
  votingSeconds: number;
  lastGuess: boolean;
}

/** Broadcast to everyone in the room. Must never carry words or unrevealed roles. */
export interface PublicRoomState {
  code: string;
  phase: Phase;
  hostId: string;
  settings: RoomSettings;
  round: number;
  players: {
    id: string;
    name: string;
    alive: boolean;
    connected: boolean;
    revealedRole?: Role;
  }[];
  activePlayerId?: string;
  clues: { playerId: string; round: number; text: string }[];
  /** Server epoch ms. Clients only render a countdown from this. */
  phaseEndsAt?: number;
  /** Count only, so individual votes stay secret. */
  votesCast?: number;
  result?: {
    winner: 'CREW' | 'IMPOSTOR';
    roles: Record<string, Role>;
    crewWord: string;
    decoyWord: string;
  };
}

/** Sent only to one socket. */
export interface PrivateCard {
  word: string;
}
