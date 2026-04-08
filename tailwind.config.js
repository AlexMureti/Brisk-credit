/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brisk Credit Brand Colors (from actual logo)
        navy: {
          DEFAULT: "#0A2540",
          deep: "#061B2E",
          light: "#0F3654",
        },
        // Primary brand orange from logo
        orange: {
          DEFAULT: "#FF6B35",
          brand: "#FF6B35",
          light: "#FF8555",
          dark: "#E55A25",
        },
        // Primary brand blue from logo
        blue: {
          DEFAULT: "#0099FF",
          brand: "#0099FF",
          light: "#33B1FF",
          dark: "#0077CC",
          navy: "#0A2540",
        },
        // Accent green (secondary)
        green: {
          brand: "#1a6b3a",
          light: "#22a34f",
          dark: "#124a28",
        },
        gold: {
          DEFAULT: "#f5a623",
          light: "#f7c05a",
          dark: "#c9840d",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 28px 70px rgba(0,0,0,0.45)",
        "card-hover": "0 32px 80px rgba(0,0,0,0.55)",
        glow: "0 0 40px rgba(26, 107, 58, 0.3)",
      },
      fontFamily: {
        display: ['Montserrat', 'Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245, 166, 35, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(245, 166, 35, 0.6)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-left": "slide-left 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
