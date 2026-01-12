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
            { title: "Solution", href: "/#solution" },
            { title: "Pricing", href: "/#pricing" },
            { title: "Contact", href: "/contact" },
            //{ title: "About", href: "/" },
        ],
    },
    {
        group: "Company",
        items: [
            // { title: "About", href: "#" },
            { title: "Blog", href: "/blogs" },
            { title: "Terms", href: "/terms" },
            { title: "Privacy", href: "/privacy" },
        ],
    },
];
