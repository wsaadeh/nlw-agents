import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '../env.ts';
import { schema } from './schema/index.ts';

export const sql = postgres(env.DATABASE_URL);
export const db = drizzle(sql, {
  schema,
  casing: 'snake_case',
});

//const result = await sql`SELECT 'Hello' as message`;

// biome-ignore lint/suspicious/noConsole: doing tests
//console.log(result);
