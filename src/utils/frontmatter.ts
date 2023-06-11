import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

/**
 * Remark plugin to get estimated reading time.
 */
export function remarkReadingTime() {

    return function (tree: string, { data }: any) {

        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);

        data.astro.frontmatter.estReadingTime = Math.ceil(readingTime.minutes * 1.5);
    };
}

/**
 * Pretty Code plugin configuration.
 */
export function prettyCodeOptions() {

    return {
        theme: "github-dark-dimmed",

        onVisitLine(node: any) {
            if (node.children.length === 0) {
                node.children = [
                    { type: "text", value: " " },
                ];
            }
        },

        onVisitHighlightedLine(node: any) {
            node.properties.className.push("highlighted");
        },

        onVisitHighlightedWord(node: any) {
            node.properties.className = ["word"];
        },

        tokensMap: {},
    };
}
