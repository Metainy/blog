import { BLOG, SITE } from "@/config";

/**
 * Get home permalink link.
 */
export function getHomePermalink(): string {

    return getPermalink("/");
}

/**
 * Get the current permanent link based on its type.
 *
 * @param slug
 * @param type
 */
export function getPermalink(slug = "", type = ""): string {

    let permalink: string;

    switch (type) {
        case "blog":
            permalink = createPath(BLOG.blogPathname);
            break;

        default:
            permalink = createPath(trimSlash(slug));
            break;
    }

    return definitivePermalink(permalink);
}

/**
 * Get blog permalink link based on the type.
 * Default type is a post or a page.
 */
export function getBlogPermalink(slug: string | number = "", type: string = ""): string {

    let permalink: string;
    slug = String(slug);

    switch (type) {

        case "category":
            permalink = createPath(BLOG.blogPathname, BLOG.categoryPathname, trimSlash(slug));
            break;

        case "tag":
            permalink = createPath(BLOG.blogPathname, BLOG.tagPathname, trimSlash(slug));
            break;

        case "post":
        case "page":
        default:
            permalink = createPath(BLOG.blogPathname, trimSlash(slug));
            break;
    }

    return definitivePermalink(permalink);
}

/**
 * Remove all slashes.
 *
 * @param text
 */
export function trimSlash(text: string) {

    return trim(trim(text, "/"));
}

/**
 * Get a general asset URL from a path.
 *
 * @param path
 */
export function getAsset(path: string): string {

    return "/" + [SITE.baseURL, path]
        .map((element) => trimSlash(element))
        .filter((element) => !!element)
        .join("/");
}

/**
 * Get Canonical URL.
 *
 * @param path
 */
export function getCanonical(path: string = ""): string | URL {

    const url = String(new URL(path, SITE.URL));

    if (!SITE.trailingSlash && path && url.endsWith("/")) {
        return url.slice(0, -1)

    } else if (SITE.trailingSlash && path && !url.endsWith("/")) {

        return url + "/";
    }

    return url;
}

/**
 * Get full path with the base site url.
 *
 * @param permalink
 */
function definitivePermalink(permalink: string): string {

    return createPath(SITE.baseURL, permalink);
}

/**
 * Create a full path for any resource.
 *
 * @param params
 */
function createPath(...params: string[]) {

    const paths = params
        .map((element) => trimSlash(element))
        .filter((element) => !!element)
        .join("/");

    return "/" + paths + (SITE.trailingSlash && paths ? "/" : "");
}

/**
 * Trim a string with a specific condition.
 *
 * @param str
 * @param ch
 */
function trim(str = "", ch?: string) {

    let start = 0;
    let end = str.length || 0;

    while (start < end && str[start] === ch) ++start;
    while (end > start && str[end - 1] === ch) --end;

    return start > 0 || end < str.length ? str.substring(start, end) : str;
}
