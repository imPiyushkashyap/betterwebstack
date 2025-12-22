"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AnimatePresence, motion } from "framer-motion";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please use other medium to contact us");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-[10px] font-mono font-normal text-primary-foreground mb-2 tracking-[0.5px] uppercase">
                FULL NAME *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Full Name"
                  className="text-background"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-[10px] font-mono font-normal text-primary-foreground mb-2 tracking-[0.5px] uppercase">
                EMAIL *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Email"
                  className="text-background"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-[10px] font-mono font-normal text-primary-foreground mb-2 tracking-[0.5px] uppercase">
                HOW CAN WE HELP?
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={3}
                  placeholder="Tell us what features you're looking forward to..."
                  className="text-background"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center p-4 rounded-lg bg-green-500/20 text-green-100 border border-green-500/30"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>Message sent successfully!</span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-2.5 rounded-full bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors tracking-[-0.03em] h-10 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit inquiry"
                  )}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center text-sm text-red-300"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              {error}
            </motion.div>
          )}
        </div>
      </form>
    </Form>
  );
}
