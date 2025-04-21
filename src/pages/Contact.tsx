import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';
import AnimatedCursor from '@/components/AnimatedCursor';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { AtSign, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from '@/components/ui/scroll-area';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const handleSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate sending the message
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      
      toast({
        title: "Message sent successfully",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
    }, 1500);
  };
  
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedCursor />
      <Starfield />
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-aston relative inline-block">
              <span className="text-gradient">Contact Us</span>
              <div className="absolute -inset-1 bg-purple-600/20 blur-xl rounded-lg -z-10"></div>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Ready to explore new frontiers? Connect with our team and let's shape the future together.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 rounded-xl blur-xl"></div>
                <div className="neo-glass rounded-xl p-6 md:p-8 relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 font-aston">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Send us a message</span>
                  </h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-sm font-medium text-purple-300">Name</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  placeholder="Your name" 
                                  className="bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:border-purple-500/50 transition-all h-12 rounded-lg"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400 text-xs" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-sm font-medium text-purple-300">Email</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  placeholder="Your email" 
                                  className="bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:border-purple-500/50 transition-all h-12 rounded-lg"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400 text-xs" />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-sm font-medium text-purple-300">Subject</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="What's this about?" 
                                className="bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:border-purple-500/50 transition-all h-12 rounded-lg"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-sm font-medium text-purple-300">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Tell us what you're looking for" 
                                rows={6} 
                                className="bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:border-purple-500/50 transition-all resize-none rounded-lg"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-lg transition-all duration-300 relative overflow-hidden group h-14"
                      >
                        <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                        <span className="relative flex items-center justify-center gap-3">
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform'}`} />
                        </span>
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <ScrollArea className="h-full max-h-[600px] lg:max-h-none">
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-violet-500/20 rounded-xl blur-xl"></div>
                  <div className="neo-glass rounded-xl p-6 md:p-8 h-full relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 font-aston">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Connect with us</span>
                    </h2>
                    <div className="space-y-8">
                      <div className="flex items-start group">
                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors">
                          <MapPin className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-purple-300 mb-2">Location</h3>
                          <p className="text-foreground/70">
                            Tech Innovation Center<br />
                            123 Future Avenue<br />
                            San Francisco, CA 94105
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start group">
                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors">
                          <AtSign className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-purple-300 mb-2">Email</h3>
                          <p className="text-foreground/70">
                            hello@polycosmos.io<br />
                            support@polycosmos.io
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start group">
                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors">
                          <Phone className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-purple-300 mb-2">Phone</h3>
                          <p className="text-foreground/70">
                            +1 (415) 555-0123<br />
                            Mon-Fri, 9am-6pm PST
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h3 className="font-medium mb-4 text-purple-300">Follow us</h3>
                      <div className="flex space-x-4">
                        {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                          <a 
                            key={social}
                            href="#" 
                            className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-foreground/70 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                          >
                            {social === 'facebook' && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                            )}
                            {social === 'twitter' && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                            )}
                            {social === 'instagram' && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            )}
                            {social === 'linkedin' && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
