import { createPrismaClient } from '@impostor/shared/db';
import { seedThemes } from './seed-data';

const prisma = createPrismaClient();

async function main() {
  for (const { slug, name, pairs } of seedThemes) {
    const theme = await prisma.theme.upsert({
      where: { slug },
      update: { name },
      create: { slug, name },
    });

    for (const { wordA, wordB, language, difficulty } of pairs) {
      await prisma.wordPair.upsert({
        where: { themeId_wordA_wordB: { themeId: theme.id, wordA, wordB } },
        update: { language, difficulty, approved: true },
        create: { themeId: theme.id, wordA, wordB, language, difficulty, approved: true },
      });
    }

    console.log(`Seeded ${name}: ${pairs.length} pairs`);
  }
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
