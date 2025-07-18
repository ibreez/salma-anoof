import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const rsvps = pgTable("rsvps", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  guests: integer("guests").notNull(),
  mealPreference: text("meal_preference"),
  message: text("message"),
  attendance: text("attendance").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertRsvpSchema = createInsertSchema(rsvps).omit({
  id: true,
  submittedAt: true,
}).extend({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  guests: z.number().min(1, "Number of guests must be at least 1").max(10, "Maximum 10 guests allowed"),
  attendance: z.enum(["attending", "notAttending"], {
    required_error: "Please select your attendance status",
  }),
  mealPreference: z.string().optional(),
  message: z.string().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertRsvp = z.infer<typeof insertRsvpSchema>;
export type Rsvp = typeof rsvps.$inferSelect;
