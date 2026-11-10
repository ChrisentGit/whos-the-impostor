export type SeedDifficulty = 'EASY' | 'MEDIUM' | 'HARD';
export type SeedLanguage = 'en' | 'tl' | 'taglish';

export interface SeedPair {
  wordA: string;
  wordB: string;
  language: SeedLanguage;
  difficulty: SeedDifficulty;
}

export interface SeedTheme {
  slug: string;
  name: string;
  pairs: SeedPair[];
}

const pair = (
  wordA: string,
  wordB: string,
  language: SeedLanguage,
  difficulty: SeedDifficulty,
): SeedPair => ({ wordA, wordB, language, difficulty });

export const seedThemes: SeedTheme[] = [
  {
    slug: 'food',
    name: 'Food',
    pairs: [
      pair('Adobo', 'Sinigang', 'tl', 'EASY'),
      pair('Lechon', 'Liempo', 'tl', 'MEDIUM'),
      pair('Pandesal', 'Monay', 'tl', 'MEDIUM'),
      pair('Halo-Halo', 'Mais con Yelo', 'tl', 'MEDIUM'),
      pair('Turon', 'Banana Cue', 'taglish', 'EASY'),
      pair('Bibingka', 'Puto Bumbong', 'tl', 'MEDIUM'),
      pair('Tapsilog', 'Longsilog', 'tl', 'EASY'),
      pair('Kare-Kare', 'Caldereta', 'tl', 'MEDIUM'),
      pair('Lumpia', 'Empanada', 'tl', 'EASY'),
      pair('Pancit Canton', 'Spaghetti', 'taglish', 'EASY'),
      pair('Balut', 'Penoy', 'tl', 'HARD'),
      pair('Leche Flan', 'Ube Halaya', 'tl', 'MEDIUM'),
      pair('Fried Chicken', 'Chicken Inasal', 'taglish', 'EASY'),
      pair('Pizza', 'Burger', 'en', 'EASY'),
      pair('Mango', 'Papaya', 'en', 'EASY'),
    ],
  },
  {
    slug: 'places-ph',
    name: 'Places in the Philippines',
    pairs: [
      pair('Boracay', 'Siargao', 'en', 'EASY'),
      pair('Baguio', 'Tagaytay', 'en', 'EASY'),
      pair('Manila', 'Cebu City', 'en', 'EASY'),
      pair('Palawan', 'Bohol', 'en', 'EASY'),
      pair('Vigan', 'Intramuros', 'en', 'MEDIUM'),
      pair('Mayon Volcano', 'Taal Volcano', 'en', 'EASY'),
      pair('Chocolate Hills', 'Banaue Rice Terraces', 'en', 'EASY'),
      pair('Davao City', 'Cagayan de Oro', 'en', 'MEDIUM'),
      pair('BGC', 'Makati', 'en', 'EASY'),
      pair('SM Mall of Asia', 'Greenbelt', 'en', 'MEDIUM'),
      pair('Rizal Park', 'Quezon Memorial Circle', 'en', 'MEDIUM'),
      pair('Puerto Galera', 'La Union', 'en', 'MEDIUM'),
      pair('Coron', 'El Nido', 'en', 'HARD'),
      pair('Sagada', 'Batanes', 'en', 'HARD'),
      pair('Quiapo', 'Divisoria', 'en', 'MEDIUM'),
    ],
  },
  {
    slug: 'animals',
    name: 'Animals',
    pairs: [
      pair('Carabao', 'Cow', 'en', 'EASY'),
      pair('Dog', 'Cat', 'en', 'EASY'),
      pair('Lion', 'Tiger', 'en', 'EASY'),
      pair('Shark', 'Dolphin', 'en', 'EASY'),
      pair('Butterfly', 'Moth', 'en', 'MEDIUM'),
      pair('Horse', 'Donkey', 'en', 'EASY'),
      pair('Chicken', 'Duck', 'en', 'EASY'),
      pair('Bee', 'Wasp', 'en', 'MEDIUM'),
      pair('Crocodile', 'Alligator', 'en', 'HARD'),
      pair('Monkey', 'Gorilla', 'en', 'EASY'),
      pair('Rabbit', 'Hamster', 'en', 'EASY'),
      pair('Whale Shark', 'Manta Ray', 'en', 'MEDIUM'),
      pair('Spider', 'Scorpion', 'en', 'MEDIUM'),
      pair('Goat', 'Sheep', 'en', 'EASY'),
      pair('Penguin', 'Ostrich', 'en', 'MEDIUM'),
    ],
  },
];
