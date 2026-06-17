/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                "bg-alt": "var(--bg-alt)",
                "bg-deep": "var(--bg-deep)",
                panel: "var(--panel)",
                slate: "var(--slate)",
                "bg-light-slate": "var(--bg-light-slate)",
                border: "var(--border)",
                "border-strong": "var(--border-strong)",
                fg: "var(--fg)",
                muted: "var(--muted)",
                accent: "var(--accent)",
                gold: "var(--gold)",
                "accent-fg": "var(--accent-fg)",
                secondary: "var(--secondary)",
                "secondary-fg": "var(--secondary-fg)",
            },
            maxWidth: { content: "65ch" },
        },
    },
    plugins: [],
};
