export const BLOG = {

    postsPerPage: 8,

    similarPostsCount: 3,

    excerptLength: 150,

    defaultCover: "/uploads/covers/default.jpg",

    defaultCategory: "Uncategorized",

    defaultTag: "Misc",

    postPermalink: "/%slug%", // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%

    blogPathname: "blog", // Blog main path, you can change this to "articles" (/articles)

    categoryPathname: "categories", // Category main path /category/some-category

    tagPathname: "tags", // Tag main path /tag/some-tag

    dateFormat: new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
    }),

    tocHeadingDepth: {
        start: 2,
        end: 3
    }
};


