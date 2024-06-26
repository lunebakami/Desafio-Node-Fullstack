import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
        // Custom colors (some overlap with the above colors)
        "on-primary": {
          DEFAULT: "#333B49",
          foreground: "#EBF0F9",
        },
        primary: {
          DEFAULT: "#EBF0F9",
          foreground: "#333B49",
        },
        "on-secondary": {
          DEFAULT: "#10141D",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#10141D",
        },
        "on-support-blue": {
          DEFAULT: "#CAD6EC",
          foreground: "#2669FF",
        },
        "grey-blue": {
          DEFAULT: "#183362",
          foreground: "#FFFFFF",
        },
        "grey-blue-2": {
          DEFAULT: "#4E4F5B",
          foreground: "#FFFFFF",
        },
        "attention-bg": {
          DEFAULT: "#2669FF",
          foreground: "#333B49",
        },
        grey: {
          DEFAULT: "#999AA1",
          foreground: "#FFFFFF",
        },
        "light-grey": {
          DEFAULT: "#BABBBF",
          foreground: "#FFFFFF",
        },
        background: {
          DEFAULT: "#333B49",
          foreground: "#EBF0F9",
        },
        surface: {
          DEFAULT: "#10141D",
          foreground: "#EBF0F9",
        },
        "surface-2": {
          DEFAULT: "#191E28",
          foreground: "#FFFFFF",
        },
        overlay: {
          DEFAULT: "#19141D 80%",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#99C766",
          foreground: "#F0FAF0",
        },
        "success-support": {
          DEFAULT: "#2F3B28",
          foreground: "#FFFFFF",
        },
        alert: {
          DEFAULT: "#F79E1B",
          foreground: "#10141D",
        },
        "alert-support": {
          DEFAULT: "#61461F",
          foreground: "#FFFFFF",
        },
        error: {
          DEFAULT: "#F6285F",
          foreground: "#F5F5F5",
        },
        "error-support": {
          DEFAULT: "#461527",
          foreground: "#F5F5F5",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      width: {
        'form-card': '37.5rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
