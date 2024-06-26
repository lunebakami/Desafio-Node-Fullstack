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
        onPrimary: {
          DEFAULT: "#333B49",
          foreground: "#EBF0F9",
        },
        primary: {
          DEFAULT: "#EBF0F9",
          foreground: "#333B49",
        },
        onSecondary: {
          DEFAULT: "#10141D",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#10141D",
        },
        onSupportBlue: {
          DEFAULT: "#CAD6EC",
          foreground: "#2669FF",
        },
        greyBlue: {
          DEFAULT: "#183362",
          foreground: "#FFFFFF",
        },
        greyBlue2: {
          DEFAULT: "#4E4F5B",
          foreground: "#FFFFFF",
        },
        attentionBg: {
          DEFAULT: "#2669FF",
          foreground: "#333B49",
        },
        grey: {
          DEFAULT: "#999AA1",
          foreground: "#FFFFFF",
        },
        lightGrey: {
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
        surface2: {
          DEFAULT: "#191E28",
          foreground: "#FFFFFF",
        },
        overlay: {
          DEFAULT: "#19141D 80%",
          foreground: "#FFFFFF",
        }
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
