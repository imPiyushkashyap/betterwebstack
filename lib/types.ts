import { type IconType } from "react-icons";

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface SocialMediaLink {
    name: string;
    url: string;
    icon: IconType;
    ariaLabel: string;
}

export interface ContactFeature {
    icon: React.ReactNode;
    description: string;
}

export interface ContactInfo {
    email: string;
    emailLabel: string;
}
