import {
  pgTable,
  varchar,
  date,
  serial,
  integer,
  timestamp,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { department } from './department';

export const employee = pgTable('employee', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 50 }).notNull(),
  lastName: varchar('last_name', { length: 50 }).notNull(),
  designation: varchar('designation', { length: 50 }).notNull(),
  dob: date('dob').notNull(),
  nic: varchar('nic', { length: 15 }).notNull().unique(),
  email: varchar('email', { length: 50 }).notNull().unique(),
  phone: varchar('phone', { length: 10 }).notNull(),
  department: integer('department').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const employeeRelations = relations(employee, ({ one }) => ({
  author: one(department, {
    fields: [employee.department],
    references: [department.id],
  }),
}));
