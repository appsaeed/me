import social_media from "./social_media";
export default {
    usefull_links: {
        title: "Useful Links",
        links: [
            {
                name: "Content",
                link: "#content",
            },
            {
                name: "How it Works",
                link: "#how-it-works",
            },
            {
                name: "Create",
                link: "#create",
            },
            {
                name: "Explore",
                link: "#explore",
            },
            {
                name: "Terms & Services",
                link: "/terms-and-services",
            },
        ],
    },
    community: {
        title: "Community",
        links: [
            {
                name: "Help Center",
                link: "/help-center",
            },
            {
                name: "Partners",
                link: "#partners/",
            },
            {
                name: "Blog",
                link: "#blog",
            },
        ],
    },
    resources: {
        title: "Resources",
        links: [
            {
                name: "Github",
                link: "https://github.com/appseed",
            },
            {
                name: "Themeforest",
                link: "https://themeforest.com",
            },
            {
                name: "Wordpress",
                link: "https://wordpress.com",
            },
        ],
    },
    followus: {
        title: "Follow us",
        links: Object.values(social_media),
    },
    Legal: {
        title: "Legal & Licenses",
        links: [
            { name: "Privacy Policy", link: "/privacy-policy" },
            { name: "Terms & Conditions", link: "/term-and-conditions" },
            { name: "License", link: "/license" },
        ],
    },
};
