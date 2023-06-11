const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * Support the use of Tailwind opacity modifier.
 *
 * @param {string} variableName
 * @returns {(function({opacityValue: *}): string)|*}
 */
function withOpacity(variableName) {

    return ({ opacityValue }) => {

        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }

        return `rgb(var(${variableName}))`;
    };
}

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

    darkMode: "class",

    theme: {
        extend: {
            colors: {
                "primary": {
                    DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
                },
                "secondary": {
                    DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
                },
                "accent": {
                    DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
                },
                "background": {
                    DEFAULT: "rgb(var(--color-background) / <alpha-value>)",
                    offset1: "rgb(var(--color-background-offset1) / <alpha-value>)",
                    offset2: "rgb(var(--color-background-offset2) / <alpha-value>)"
                },
                "surface": {
                    DEFAULT: "rgb(var(--color-surface) / <alpha-value>)"
                },
                "success": {},
                "error": {},
                "warning": {},
                "on-primary": {
                    DEFAULT: "rgb(var(--color-on-primary) / <alpha-value>)"
                },
                "on-secondary": {
                    DEFAULT: "rgb(var(--color-on-secondary) / <alpha-value>)"
                },
                "on-accent": {
                    DEFAULT: "rgb(var(--color-on-accent) / <alpha-value>)",
                },
                "on-background": {
                    bright: "rgb(var(--color-on-background-bright) / <alpha-value>)",
                    DEFAULT: "rgb(var(--color-on-background) / <alpha-value>)",
                    dim: "rgb(var(--color-on-background-dim) / <alpha-value>)",
                    muted: "rgb(var(--color-on-background-muted) / <alpha-value>)"
                },
                "on-surface": {
                    DEFAULT: "rgb(var(--color-on-surface) / <alpha-value>)"
                },
                "on-success": {},
                "on-error": {},
                "on-warning": {},
            },

            fontFamily: {
                sans: ["var(--family-sans)", ...defaultTheme.fontFamily.sans],
                mono: ["var(--family-mono)", ...defaultTheme.fontFamily.mono],
            }
        },
    },

    plugins: [
        require("@tailwindcss/typography")
    ]
}
