// Leksjon 17.10.24 Tid:3:10:00

// pnpm install better-sqlite3
// pnpm add -D @types/better-sqlite3
import Database from "better-sqlite3"

export const db = new Database(env.DATABASE_URL)
export type DB = typeof db

export default db