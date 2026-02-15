import { sql } from "drizzle-orm";
import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: text().primaryKey().default(sql`gen_random_uuid()`),
  name: text("name"),
  email: text("email").notNull().unique(),
  image: text("image"),
  created_at: text("created_at").default(sql`now()`),
});
