import { existsSync } from 'node:fs';
import path from 'node:path';
import type { NextConfig } from 'next';

// The monorepo keeps one .env at the root, but Next.js only looks in apps/web.
const rootEnv = path.resolve(import.meta.dirname, '../../.env');
if (existsSync(rootEnv)) process.loadEnvFile(rootEnv);

const nextConfig: NextConfig = {
  transpilePackages: ['@impostor/engine', '@impostor/shared'],
};

export default nextConfig;
