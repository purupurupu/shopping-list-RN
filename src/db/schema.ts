import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"),
});
export const shoppingLists = sqliteTable("shoppingLists", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title"),
  description: text("description"),
  userId: integer("user_id").references(() => users.id),
});
export const items = sqliteTable("items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  quantity: integer("quantity"),
  memo: text("memo"),
  checked: integer("checked"),
  listId: integer("list_id").references(() => shoppingLists.id),
  categoryId: integer("category_id").references(() => categories.id),
});
export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
});
