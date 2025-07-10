import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const rooms = pgTable('romms', {
  id: uuid().primaryKey().defaultRandom(),
  name: text(),
  description: text(),
  createdAt: timestamp().defaultNow().notNull(),
});
