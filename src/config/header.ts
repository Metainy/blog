export const HEADER: HeaderData = {

    isSticky: true,

    showThemeToggle: true,

    showSearchButton: true,

    nav: [
        {
            text: "Blog",
            links: [
                {
                    text: "Posts",
                    href: "/blog",
                },
                {
                    text: "Tags",
                    href: "/blog/tags",
                },
                {
                    text: "Categories",
                    href: "/blog/categories",
                },
            ],
        },
        {
            text: "Resources",
            href: "/resources",
        },
        {
            text: "Snippets",
            href: "/snippets",
        },
        {
            text: "About",
            href: "/about",
        }
    ],

    actions: [
        { text: "Resume", ariaLabel: "Resume", href: "https://resume.metainy.me", external: true }
    ]
};

export interface HeaderData {
    isSticky: boolean,
    showThemeToggle: boolean,
    showSearchButton: boolean,
    nav: NavLink[],
    actions: ActionLink[]
}

interface NavLink extends Link {
    links?: Link[];
}

interface ActionLink extends Link {
    external?: boolean;
}

interface Link {
    text: string;
    href?: string;
    ariaLabel?: string;
    icon?: string;
}
