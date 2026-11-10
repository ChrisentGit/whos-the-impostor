import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

const webFiles = ['apps/web/**/*.{ts,tsx,mjs}'];

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/generated/**',
      '**/next-env.d.ts',
      '**/playwright-report/**',
      '**/test-results/**',
    ],
  },
  ...tseslint.configs.recommended,
  ...nextCoreWebVitals.map((config) => ({ ...config, files: webFiles })),
  {
    files: webFiles,
    settings: { next: { rootDir: 'apps/web' } },
  },
  prettier,
);
