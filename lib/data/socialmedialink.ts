import { FaFacebook, FaInstagram, FaMedium } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import type { SocialMediaLink } from "@/lib/types";

export const socialMediaLinks: SocialMediaLink[] = [
    {
        name: "Medium",
        url: "https://medium.com/@betterwebstack",
        icon: FaMedium,
        ariaLabel: "Follow us on Medium",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/betterwebstack",
        icon: FaInstagram,
        ariaLabel: "Follow us on Instagram",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61583604343715",
        icon: FaFacebook,
        ariaLabel: "Follow us on Facebook",
    },
    {
        name: "X (Twitter)",
        url: "https://x.com/betterwebstack",
        icon: BsTwitterX,
        ariaLabel: "Follow us on X",
    },
];
