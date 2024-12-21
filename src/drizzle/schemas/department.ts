import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { employee } from './employee';

export const department = pgTable('department', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
});

export const usersRelations = relations(department, ({ many }) => ({
  employee: many(employee),
}));
