import { SITE } from "@/config";
import RSS from "@astrojs/rss";
import { getPosts } from "@utils/blog";
import { getBlogPermalink } from "@utils/permalinks";

export async function get() {

    const posts = await getPosts();

    return RSS({
        title: SITE.name,
        description: SITE.description,
        site: SITE.URL,

        items: posts.map((post) => ({
            link: getBlogPermalink(post.slug),
            title: post.title,
            description: post.description || post.excerpt,
            pubDate: new Date(post.publishDate),
        })),

        trailingSlash: SITE.trailingSlash
    });
}
