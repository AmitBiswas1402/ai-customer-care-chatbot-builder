import { sql } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: text().primaryKey().default(sql`gen_random_uuid()`),
  organizatin_id: text("organization_id").notNull(),
  name: text("name"),
  email: text("email").notNull().unique(),
  image: text("image"),
  created_at: text("created_at").default(sql`now()`),
});
