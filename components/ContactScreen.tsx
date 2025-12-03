"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { MorphyButton } from "./ui/morphy-button";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { contactInfo, contactFeatures } from "@/lib/data/contact";
import { socialMediaLinks } from "@/lib/data/socialmedialink";

const ExpandableScreenDemo = () => {
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

      // Auto-reset success state after 5 seconds
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
    <ExpandableScreen
      layoutId="cta-card"
      triggerRadius="100px"
      contentRadius="24px"
    >
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[90%] tracking-[-0.03em] text-foreground mix-blend-exclusion max-w-2xl">
            Need a website that doesn&apos;t suck?
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-[160%] text-foreground max-w-2xl px-4">
            Need a website that loads fast, modern web apps that actually work.
            No bloat, no drama, just good tech.
          </p>

          <ExpandableScreenTrigger>
            <MorphyButton className="select-none">Get in touch</MorphyButton>
          </ExpandableScreenTrigger>
        </div>
      </div>

      <ExpandableScreenContent className="bg-primary">
        <div className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16">
          <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary-foreground leading-none tracking-[-0.03em]">
              Contact us
            </h2>

            <div className="space-y-4 sm:space-y-6 pt-4">
              {contactFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-primary-foreground leading-[150%]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-primary-foreground/20">
              <div className="flex flex-col gap-4">
                {/* Email */}
                <div>
                  <p className="text-sm text-primary-foreground/70 mb-1">
                    {contactInfo.emailLabel}
                  </p>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-base sm:text-lg text-primary-foreground hover:underline flex items-center gap-2"
                  >
                    <CiMail className="w-5 h-5" />
                    {contactInfo.email}
                  </Link>
                </div>

                {/* Socials */}
                <div>
                  <p className="text-sm text-primary-foreground/70 mb-2">
                    Follow us
                  </p>
                  <div className="flex gap-3">
                    {socialMediaLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Link
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-foreground hover:text-primary-foreground/70 transition"
                          aria-label={social.ariaLabel}
                        >
                          <Icon className="w-6 h-6" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
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
          </div>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
};

export default ExpandableScreenDemo;
