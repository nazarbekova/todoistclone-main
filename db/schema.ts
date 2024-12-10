import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const todo1 = pgTable("todo1", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
