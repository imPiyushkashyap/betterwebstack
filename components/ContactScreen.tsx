import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { MorphyButton } from "./ui/morphy-button";
import { FaFacebook, FaInstagram, FaMedium } from "react-icons/fa";
import { Textarea } from "./ui/textarea";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { BsTwitter, BsTwitterX } from "react-icons/bs";

const ExpandableScreenDemo = () => {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
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
              <div className="flex gap-3 sm:gap-4">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base text-primary-foreground leading-[150%]">
                    Quick response time - we typically reply within 24 hours.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base text-primary-foreground leading-[150%]">
                    Direct line to our team - your questions and feedback matter
                    to us.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-primary-foreground/20">
              <div className="flex flex-col gap-4">
                {/* Email */}
                <div>
                  <p className="text-sm text-primary-foreground/70 mb-1">
                    Email us
                  </p>
                  <Link
                    href="mailto:piyush.freelancer.in@gmail.com
"
                    className="text-base sm:text-lg text-primary-foreground hover:underline flex items-center gap-2"
                  >
                    <CiMail className="w-5 h-5" />
                    piyush.freelancer.in@gmail.com
                  </Link>
                </div>

                {/* Socials */}
                <div>
                  <p className="text-sm text-primary-foreground/70 mb-2">
                    Follow us
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href="https://medium.com/@betterwebstack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground hover:text-primary-foreground/70 transition"
                    >
                      <FaMedium className="w-6 h-6" />
                    </Link>

                    <Link
                      href="https://www.instagram.com/betterwebstack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground hover:text-primary-foreground/70 transition"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </Link>

                    <Link
                      href="https://www.facebook.com/profile.php?id=61583604343715"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground hover:text-primary-foreground/70 transition"
                    >
                      <FaFacebook className="w-6 h-6" />
                    </Link>
                    <Link
                      href="https://x.com/betterwebstack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground hover:text-primary-foreground/70 transition"
                    >
                      <BsTwitterX className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form className="space-y-4 sm:space-y-5">
              <div>
                <Label
                  htmlFor={nameId}
                  className="block text-[10px] font-mono font-normal text-primary-foreground mb-2 tracking-[0.5px] uppercase"
                >
                  FULL NAME *
                </Label>
                <Input
                  type="text"
                  id={nameId}
                  name="name"
                  className="text-background"
                  placeholder="Enter your Full Name"
                />
              </div>

              <div>
                <Label
                  htmlFor={emailId}
                  className="block text-[10px] font-mono font-normal text-primary-foreground mb-2 tracking-[0.5px] uppercase"
                >
                  EMAIL *
                </Label>
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  id={emailId}
                  name="email"
                  className="text-background"
                />
              </div>

              <div>
                <Label
                  htmlFor={messageId}
                  className="block text-[10px] font-mono font-normal text-primary-foreground mb-2 tracking-[0.5px] uppercase"
                >
                  HOW CAN WE HELP?
                </Label>
                <Textarea
                  id={messageId}
                  rows={3}
                  placeholder="Tell us what features you're looking forward to..."
                  className="text-background"
                />
              </div>

              <Button
                type="submit"
                className="w-full px-8 py-2.5 rounded-full bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors tracking-[-0.03em] h-10"
              >
                Submit inquiry
              </Button>
            </form>
          </div>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
};

export default ExpandableScreenDemo;
