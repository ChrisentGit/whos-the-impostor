# Who's the Impostor? — Project Rules

Online multiplayer word game with a group video-call feel. Portfolio project.
Full spec and roadmap: `docs/PLAN.md`. Read it before starting any task.

## How to work in this repo

- Work one phase at a time, in the order in `docs/PLAN.md`. Don't start a phase until the previous phase's "Done when" check passes.
- At the start of a phase, give me a short plan of the files you'll create or change, then build it.
- After each phase: run lint, type-check and tests, then tick the phase's checkboxes in `docs/PLAN.md`.
- Commit in small steps with clear messages (`feat:`, `fix:`, `test:`, `chore:`). Use one branch per phase (`phase-1-engine`, ...).
- Ask me before adding a dependency that isn't listed in the stack below.
- Never commit secrets. Keep keys in `.env` and keep `.env.example` up to date.

## Stack

- Monorepo: pnpm workspaces
  - `apps/web`: Next.js (App Router), TypeScript, Tailwind, shadcn/ui, Auth.js (Google + guest)
  - `apps/game-server`: Node, TypeScript, Socket.IO
  - `packages/shared`: shared types, event names, zod schemas
  - `packages/engine`: pure game engine (reducer); no network or DB code
- Database: PostgreSQL + Prisma (schema lives in `apps/web/prisma`, client shared)
- Video: LiveKit Cloud + `@livekit/components-react`
- Tests: Vitest (unit), Playwright (end-to-end)
- Hosting: web on Vercel, game server on Render, database on Neon or Supabase

## Non-negotiable rules

1. **The server is in charge of the game.** Clients only send intents (`clue:submit`, `vote:cast`). The game server validates them and broadcasts state.
2. **Words and roles never leak.** A player's word goes only to their own socket. `PublicRoomState` never contains words or roles until they're revealed. Add a test that checks this.
3. **Decoy mode:** the impostor gets a related word and is never told they're the impostor. The UI shows "Your word: X", never a role, until elimination or game over.
4. The engine in `packages/engine` stays pure: `(state, action) => newState`, deterministic, with randomness passed in (a seeded RNG) so tests are repeatable.
5. Timers run on the server. Clients get `phaseEndsAt` timestamps and only display countdowns.
6. Event names and payload types live only in `packages/shared`. Validate every incoming socket payload with zod.

## Commands (keep these working)

- `pnpm dev`: run web + game server
- `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm e2e`
- `pnpm db:migrate`, `pnpm db:seed`
