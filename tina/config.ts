import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const clientId = process.env.TINA_CLIENT_ID || null;
const token = process.env.TINA_TOKEN || null;

export default defineConfig({
    branch,
    clientId: clientId,
    token: token,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "uploads",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "post",
                label: "Blog Posts",
                path: "src/content/blog",
                defaultItem: () => {
                    return {
                        side: true,
                        comments: true,
                        publishDate: new Date().toISOString().split("T")[0]
                    }
                },
                ui: {
                    filename: {
                        slugify: values => {
                            return `${values.publishDate}-${values?.title?.toLowerCase().replace(/ /g, "-")}`
                        }
                    }
                },
                fields: [
                    {
                        type: "boolean",
                        name: "draft",
                        label: "Draft"
                    },
                    {
                        type: "boolean",
                        name: "featured",
                        label: "Featured"
                    },
                    {
                        type: "boolean",
                        name: "comments",
                        label: "Comments"
                    },
                    {
                        type: "boolean",
                        name: "side",
                        label: "Sidebar"
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true
                    },
                    {
                        type: "datetime",
                        name: "publishDate",
                        label: "Publish Date",
                        required: true,
                        ui: {
                            dateFormat: "YYYY-MM-DD",
                            parse: (value: any) => value && value.utc().format("YYYY-MM-DD"),
                            format: (value: any) => value && new Date(value)
                        }
                    },
                    {
                        type: "string",
                        name: "slug",
                        label: "Slug"
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "Description"
                    },
                    {
                        type: "string",
                        name: "excerpt",
                        label: "Excerpt"
                    },
                    {
                        type: "image",
                        label: "Cover Image",
                        name: "cover",
                    },
                    {
                        type: "string",
                        name: "category",
                        label: "Category",
                    },
                    {
                        type: "string",
                        name: "tags",
                        label: "Tags",
                        list: true
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true
                    }
                ]
            }
        ]
    }
});
