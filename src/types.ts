export interface Post {
    id: string;
    slug: string;
    collection: string;
    title: string;
    description?: string;
    excerpt: string;
    publishDate: Date | string;
    cover: string;
    category: Category;
    tags: Array<Tag>;
    side: boolean
    featured?: boolean
    draft?: boolean;
    comments: boolean;
    Content: unknown;
    readingTime?: number;
    headings: Array<object>;
}

export interface Tag {
    text: string;
    slug: string;
    count?: number;
}

export interface Category {
    text: string;
    slug: string;
    count?: number;
}
