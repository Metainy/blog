import { getCollection } from "astro:content";
import slugify from "@sindresorhus/slugify";
import { trimSlash } from "@utils/permalinks";
import { BLOG } from "@/config";

// Types
import type { CollectionEntry } from "astro:content";
import type { MarkdownHeading } from "astro";
import type { Post, Tag, Category } from "@/types";

let sortedPosts: Post[];

/**
 * Get all published posts after normalization and sorting based on date.
 */
export async function getPosts() {

    if (sortedPosts) return sortedPosts;

    const posts = await getCollection("blog", ({ data }) => data.draft !== true);
    const pendingPosts = posts.map(async (post) => await normalizedPost(post));
    const normalizedPosts = await Promise.all(pendingPosts);

    // Sort by date
    sortedPosts = normalizedPosts.sort((a, b) =>
        new Date(b.publishDate + "UTC").valueOf() -
        new Date(a.publishDate + "UTC").valueOf()
    );

    return sortedPosts;
}

/**
 * Get a list of unique categories from posts collection sorted alphabetically.
 *
 * @param posts
 */
export function getCategories(posts: Post[]) {

    const uniqueCategories: any = {};

    posts.forEach((post) => {

        const categoryName = post.category?.text.toLowerCase();

        if (uniqueCategories[categoryName]) {
            uniqueCategories[categoryName].count++;
        } else {
            uniqueCategories[categoryName] = { ...post.category, count: 1 };
        }
    });

    const categoriesArray: Category[] = Object.values(uniqueCategories);

    return categoriesArray.sort((a, b) => a.text.localeCompare(b.text));
}

/**
 * Get a list of unique tags from posts collection sorted alphabetically.
 *
 * @param posts
 */
export function getTags(posts: Post[]) {

    const uniqueTags: any = {};

    posts.forEach((post) => {

        post.tags?.forEach((tag) => {

            const tagName = tag.text.toLowerCase();

            if (uniqueTags[tagName]) {
                uniqueTags[tagName].count++;
            } else {
                uniqueTags[tagName] = { ...tag, count: 1 };
            }
        });
    });

    const tagsArray: Tag[] = Object.values(uniqueTags);

    return tagsArray.sort((a, b) => a.text.localeCompare(b.text));
}

/**
 * Calculate how many pages should be displayed based on posts length and posts per page.
 *
 * @param numberOfPosts
 * @param postPerPage
 */
export function getPagesNumber(numberOfPosts: number, postPerPage: number) {

    const numberOfPages = numberOfPosts / postPerPage;

    return Math.ceil(numberOfPages);
}

/**
 * Shallow search of similar posts.
 *
 * @param post
 * @param posts
 */
export function getSimilarPosts(post: Post, posts: Post[]) {

    let category = post.category;
    let tags = post.tags;

    // Filter by categories
    const filterByCategory = posts.filter((item) => item.category.text === category.text);

    // Filter by tags
    const filterByTags = posts.filter((item) => {

        return tags.find((tag) => {

            return item.tags.find((itemTag) => itemTag.text === tag.text);
        })
    });

    // Merge filters
    const mergedItems = [...new Set([...filterByCategory, ...filterByTags])];

    // Remove the original post
    const similarItems = mergedItems.filter((item) => item.slug !== post.slug);

    return similarItems.slice(0, BLOG.similarPostsCount);
}

/**
 * Normalize a post and add some essential attributes.
 *
 * @param post
 */
async function normalizedPost(post: CollectionEntry<"blog">) {

    const { id, collection, data } = post;
    const { Content, remarkPluginFrontmatter: frontMatter, headings } = await post.render();

    // Build ToC from headings
    const heading = buildPostToc(headings, BLOG.tocHeadingDepth.start, BLOG.tocHeadingDepth.end);

    // Slugify
    const slug = frontMatter.slug ? slugify(frontMatter.slug) : slugify(data.title);

    // Excerpt
    const excerpt = (
        data.excerpt ? data.excerpt?.slice(0, BLOG.excerptLength) : post.body.slice(0, BLOG.excerptLength)
    ) + "...";

    // Date format
    const publishDate = BLOG.dateFormat.format(data.publishDate);

    // Category
    const category = {
        text: data.category,
        slug: slugify(data.category)
    }

    // Tags
    const tags = data.tags.map((tag) => {
        return {
            text: tag,
            slug: slugify(tag)
        }
    });

    // Reading time
    const readingTime = frontMatter.estReadingTime;

    // Build permalink
    const permalink = generatePermalink(BLOG.postPermalink, { id, slug, publishDate, category });

    return {
        id,
        collection,
        slug,
        ...data,
        category,
        tags,
        excerpt,
        publishDate,
        permalink,
        readingTime,
        headings: heading,
        Content
    }
}

/**
 * Generate a custom permalink based on configuration.
 *
 * @param linkPattern
 * @param id
 * @param slug
 * @param publishDate
 * @param category
 */
function generatePermalink(linkPattern: string, { id, slug, publishDate, category }: any) {

    publishDate = new Date(publishDate);

    const year = String(publishDate.getFullYear()).padStart(4, "0");
    const month = String(publishDate.getMonth() + 1).padStart(2, "0");
    const day = String(publishDate.getDate()).padStart(2, "0");
    const hour = String(publishDate.getHours()).padStart(2, "0");
    const minute = String(publishDate.getMinutes()).padStart(2, "0");
    const second = String(publishDate.getSeconds()).padStart(2, "0");

    const permalink = linkPattern.replace("%slug%", slug)
        .replace("%id%", id)
        .replace("%category%", category || "")
        .replace("%year%", year)
        .replace("%month%", month)
        .replace("%day%", day)
        .replace("%hour%", hour)
        .replace("%minute%", minute)
        .replace("%second%", second);

    return permalink
        .split("/")
        .map((el) => trimSlash(el))
        .filter((el) => !!el)
        .join("/");
}

/**
 * Reformat post headings as a nested array based on depth.
 *
 * @param headings
 * @param minDepth
 * @param maxDepth
 */
function buildPostToc(headings: MarkdownHeading[], minDepth: number = 2, maxDepth: number = 6) {

    const toc: any = [];
    const parentHeadings = new Map();

    headings.forEach((h) => {

        if (h.depth < minDepth || h.depth > maxDepth) return;

        const heading = { ...h, subheadings: [] };

        parentHeadings.set(heading.depth, heading);

        if (heading.depth === minDepth) {
            toc.push(heading);
        } else {
            parentHeadings.get(heading.depth - 1).subheadings.push(heading);
        }
    });

    return toc;
}
