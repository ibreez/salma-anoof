import { users, rsvps, type User, type InsertUser, type InsertRsvp, type Rsvp } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRsvp(rsvp: InsertRsvp): Promise<Rsvp>;
  getAllRsvps(): Promise<Rsvp[]>;
  getRsvpByEmail(email: string): Promise<Rsvp | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private rsvps: Map<number, Rsvp>;
  private currentUserId: number;
  private currentRsvpId: number;

  constructor() {
    this.users = new Map();
    this.rsvps = new Map();
    this.currentUserId = 1;
    this.currentRsvpId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRsvp(insertRsvp: InsertRsvp): Promise<Rsvp> {
    const id = this.currentRsvpId++;
    const rsvp: Rsvp = { 
      ...insertRsvp,
      id, 
      submittedAt: new Date(),
      mealPreference: insertRsvp.mealPreference || null,
      message: insertRsvp.message || null
    };
    this.rsvps.set(id, rsvp);
    return rsvp;
  }

  async getAllRsvps(): Promise<Rsvp[]> {
    return Array.from(this.rsvps.values());
  }

  async getRsvpByEmail(email: string): Promise<Rsvp | undefined> {
    return Array.from(this.rsvps.values()).find(
      (rsvp) => rsvp.email === email,
    );
  }
}

export const storage = new MemStorage();
