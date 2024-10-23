import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "6rem",
      "8xl": "8rem",
      "9xl": "12rem",

      full: "9999px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        100: "30rem",
        104: "32rem",
        108: "34rem",
        112: "36rem",
        116: "38rem",
        120: "40rem",
        section: "5rem",
      },
      colors: {
        scarlet: {
          DEFAULT: "#f53500",
          100: "#310b00",
          200: "#621500",
          300: "#932000",
          400: "#c42a00",
          500: "#f53500",
          600: "#ff592b",
          700: "#ff8260",
          800: "#ffac95",
          900: "#ffd5ca",
        },
        pumpkin: {
          DEFAULT: "#ff6d00",
          100: "#331600",
          200: "#662c00",
          300: "#994200",
          400: "#cc5800",
          500: "#ff6d00",
          600: "#ff8b33",
          700: "#ffa866",
          800: "#ffc599",
          900: "#ffe2cc",
        },
        ut_orange: {
          DEFAULT: "#ff8500",
          100: "#331a00",
          200: "#663500",
          300: "#994f00",
          400: "#cc6900",
          500: "#ff8500",
          600: "#ff9c33",
          700: "#ffb566",
          800: "#ffce99",
          900: "#ffe6cc",
        },
        princeton_orange: {
          DEFAULT: "#ff9100",
          100: "#331d00",
          200: "#663a00",
          300: "#995700",
          400: "#cc7400",
          500: "#ff9100",
          600: "#ffa733",
          700: "#ffbd66",
          800: "#ffd399",
          900: "#ffe9cc",
        },
        orange_peel: {
          DEFAULT: "#ff9e00",
          100: "#331f00",
          200: "#663f00",
          300: "#995e00",
          400: "#cc7e00",
          500: "#ff9e00",
          600: "#ffb133",
          700: "#ffc466",
          800: "#ffd899",
          900: "#ffebcc",
        },
        pacific_cyan: {
          DEFAULT: "#00b4d8",
          100: "#00242b",
          200: "#004756",
          300: "#006b81",
          400: "#008fab",
          500: "#00b4d8",
          600: "#12d8ff",
          700: "#4ee1ff",
          800: "#89ebff",
          900: "#c4f5ff",
        },
        blue_green: {
          DEFAULT: "#0096c7",
          100: "#001e28",
          200: "#003c50",
          300: "#005a77",
          400: "#00779f",
          500: "#0096c7",
          600: "#06c1ff",
          700: "#44d0ff",
          800: "#83e0ff",
          900: "#c1efff",
        },
        honolulu_blue: {
          DEFAULT: "#0077b6",
          100: "#001825",
          200: "#003049",
          300: "#00486e",
          400: "#005f93",
          500: "#0077b6",
          600: "#00a2f9",
          700: "#3bbaff",
          800: "#7cd1ff",
          900: "#bee8ff",
        },
        marian_blue: {
          DEFAULT: "#023e8a",
          100: "#000c1b",
          200: "#011836",
          300: "#012451",
          400: "#02306d",
          500: "#023e8a",
          600: "#035cd1",
          700: "#2381fc",
          800: "#6cabfd",
          900: "#b6d5fe",
        },
        federal_blue: {
          DEFAULT: "#03045e",
          100: "#010113",
          200: "#010226",
          300: "#020338",
          400: "#02044b",
          500: "#03045e",
          600: "#0508ae",
          700: "#0f12f8",
          800: "#5f61fa",
          900: "#afb0fd",
        },

        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        // purple: "#CBACF9",
        border: "var(--border)",
        navyBlue: "var(--navy-blue)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
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
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0.75",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0.95)",
            opacity: "0.75",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        scaleUp: "scaleUp 2s ease infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
