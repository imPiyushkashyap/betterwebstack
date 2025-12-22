export interface FooterLinkGroup {
    group: string;
    items: {
        title: string;
        href: string;
    }[];
}

export const footerLinks: FooterLinkGroup[] = [
    {
        group: "Product",
        items: [
            { title: "Features", href: "#" },
            { title: "Solution", href: "#" },
            { title: "Customers", href: "#" },
            { title: "Pricing", href: "#" },
            { title: "Help", href: "#" },
            { title: "About", href: "#" },
        ],
    },
    {
        group: "Solution",
        items: [
            { title: "Startup", href: "#" },
            { title: "Freelancers", href: "#" },
            { title: "Organizations", href: "#" },
            { title: "Students", href: "#" },
            { title: "Collaboration", href: "#" },
            { title: "Design", href: "#" },
            { title: "Management", href: "#" },
        ],
    },
    {
        group: "Company",
        items: [
            { title: "About", href: "#" },
            { title: "Careers", href: "#" },
            { title: "Blog", href: "#" },
            { title: "Press", href: "#" },
            { title: "Contact", href: "#" },
            { title: "Help", href: "#" },
        ],
    },
    {
        group: "Legal",
        items: [
            { title: "Licence", href: "#" },
            { title: "Privacy", href: "#" },
            { title: "Cookies", href: "#" },
            { title: "Security", href: "#" },
        ],
    },
];
