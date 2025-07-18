import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // RSVP submission endpoint
  app.post("/api/rsvp", async (req, res) => {
    try {
      const validatedData = insertRsvpSchema.parse(req.body);
      
      // Check if RSVP already exists for this email
      const existingRsvp = await storage.getRsvpByEmail(validatedData.email);
      if (existingRsvp) {
        return res.status(400).json({ 
          message: "An RSVP has already been submitted for this email address." 
        });
      }

      const rsvp = await storage.createRsvp(validatedData);
      res.status(201).json({ 
        message: "Thank you for your RSVP! We can't wait to celebrate with you.",
        rsvp: rsvp
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Please check your form data.",
          errors: error.errors
        });
      }
      
      console.error("Error creating RSVP:", error);
      res.status(500).json({ message: "An error occurred while processing your RSVP." });
    }
  });

  // Get all RSVPs (for admin purposes)
  app.get("/api/rsvps", async (req, res) => {
    try {
      const rsvps = await storage.getAllRsvps();
      res.json(rsvps);
    } catch (error) {
      console.error("Error fetching RSVPs:", error);
      res.status(500).json({ message: "An error occurred while fetching RSVPs." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
