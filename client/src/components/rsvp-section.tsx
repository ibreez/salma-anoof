import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertRsvpSchema, type InsertRsvp } from "@shared/schema";

export default function RSVPSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertRsvp>({
    resolver: zodResolver(insertRsvpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      guests: 1,
      mealPreference: "",
      message: "",
      attendance: "attending",
    },
  });

  const submitRsvp = useMutation({
    mutationFn: async (data: InsertRsvp) => {
      const response = await apiRequest("POST", "/api/rsvp", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "RSVP Submitted Successfully!",
        description: data.message,
      });
      setIsSubmitted(true);
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error Submitting RSVP",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertRsvp) => {
    submitRsvp.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-br from-soft-gold/20 to-blush/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-12">
              <Heart className="w-16 h-16 text-blush mx-auto mb-6" />
              <h2 className="font-great-vibes text-4xl text-blush mb-4">Thank You!</h2>
              <p className="font-lato text-lg text-charcoal/80 mb-6">
                Your RSVP has been submitted successfully. We can't wait to celebrate with you!
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-blush to-soft-gold hover:from-blush/90 hover:to-soft-gold/90"
              >
                Submit Another RSVP
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-blush/20 to-rose-pink/30 relative">
      {/* Decorative hearts and roses */}
      <div className="absolute top-10 right-10 text-rose-pink/20 text-3xl animate-bounce-gentle">💕</div>
      <div className="absolute bottom-10 left-10 text-deep-rose/20 text-4xl animate-bounce-gentle" style={{animationDelay: '1s'}}>🌹</div>
      <div className="absolute top-1/2 left-20 text-blush/20 text-2xl animate-bounce-gentle" style={{animationDelay: '1.5s'}}>💖</div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="text-rose-pink text-3xl mr-3">💖</div>
            <h2 className="font-great-vibes text-5xl md:text-6xl text-deep-rose mb-4">RSVP</h2>
            <div className="text-rose-pink text-3xl ml-3">💖</div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-pink to-deep-rose mx-auto mb-6"></div>
          <p className="font-lato text-lg text-charcoal/80">Please respond by September 15, 2025</p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          {...field} 
                          className="focus:ring-blush focus:border-blush"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          {...field} 
                          className="focus:ring-blush focus:border-blush"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Number of Guests *</FormLabel>
                      <Select onValueChange={(value) => field.onChange(parseInt(value))}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-blush focus:border-blush">
                            <SelectValue placeholder="Select number of guests" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mealPreference"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Meal Preference</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-blush focus:border-blush">
                            <SelectValue placeholder="Select meal preference" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="chicken">Grilled Chicken</SelectItem>
                          <SelectItem value="beef">Prime Beef</SelectItem>
                          <SelectItem value="salmon">Atlantic Salmon</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="vegan">Vegan</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-medium">Special Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share your excitement or special wishes..." 
                        className="resize-none focus:ring-blush focus:border-blush"
                        rows={4}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="attendance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-medium">Attendance *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-8"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="attending" id="attending" />
                          <label htmlFor="attending" className="text-charcoal">Joyfully Attending</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="notAttending" id="notAttending" />
                          <label htmlFor="notAttending" className="text-charcoal">Regretfully Declining</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={submitRsvp.isPending}
                className="w-full bg-gradient-to-r from-rose-pink to-deep-rose hover:from-rose-pink/90 hover:to-deep-rose/90 text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                {submitRsvp.isPending ? "Submitting..." : "Send RSVP"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
