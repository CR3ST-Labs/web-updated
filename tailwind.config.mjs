/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fadein: "fade 3s linear forwards",
      },
      borderRadius:{
        DEFAULT: '8px',
        'lg': '10px',
      },
      boxShadow: {
        xs: "0px 12px 24px -10px rgba(179, 182, 186, 0.05) ",
        sm: "0px 24px 32px -15px rgba(168, 175, 182, 0.15)",
        md: "0px 32px 48px -20px rgba(100, 112, 122, 0.15)",
        lg: "0px 48px 56px -25px rgba(100, 112, 122, 0.15)",
        card: "0px 4px 4px 0px rgba(35, 40, 105, 0.08)",
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        jarkata: ["Jarkata", "sans-serif"],
        ibm_plex_sans: ["IBM Plex Sans", "sans-serif"],
      },
      backgroundColor: {
        page: "var(--background)",
        // light: "#f5f7f9",
        // dark: "#141414",
      },
      backgroundImage: {
        button: "var(--button-background)",
        logo: "linear-gradient(84deg, #2A04E5 -1.66%, #FF38D7 43.95%, #FFBC7B 88.88%)",
        "logo-reverse": "linear-gradient(97deg, #FFBC7B 35.65%, #581BFF 114.13%)",
        card: "linear-gradient(90deg, #44FF9A -0.55%, #44B0FF 22.86%, #8B44FF 48.36%, #F64 73.33%, #EBFF70 99.34%)",
        border: "linear-gradient(98deg, #6DDCFF 0%, #7F60F9 100%)",
        button_border: "linear-gradient(98deg, #FF44EC 0%, #FFBC7B 100%)",
        "gradient-primary": "linear-gradient(90deg, #FF44EC 28.94%, #421BFF 114.71%)",
        "gradient-secondary": "linear-gradient(90deg, #4309E4 0%, #FF38D7 100%)",
      },

      colors: {
        primary: {
          DEFAULT: "#1601E5",
          50: "#D5D1FF",
          100: "#ABA2FF",
          200: "#8074FE",
          300: "#5645FE",
          400: "#2C17FE",
          500: "#1201BF",
          600: "#0F0199",
          700: "#0B0073",
          800: "#07004C",
          900: "#040026",
        },
        secondary: {
          DEFAULT: "#FF29E1",
          50: "#FFDBFA",
          100: "#FFB8F5",
          200: "#FF94F0",
          300: "#FF70EB",
          400: "#FF4DE6",
          500: "#F700D4",
          600: "#C500AA",
          700: "#94007F",
          800: "#630055",
          900: "#31002A",
        },
        tertiary: {
          50: "#FFF8E6",
          100: "#FFF0CE",
          200: "#FFE9B5",
          300: "#FFE29C",
          400: "#FFDA84",
          500: "#FFC12F",
          600: "#F1AA00",
          700: "#B57F00",
          800: "#795500",
          900: "#3C2A00",
        },
        dark: {
          50: "#E6E6E6",
          100: "#B3B3B3",
          200: "#8E8E8E",
          300: "#5A5A5A",
          400: "#3A3A3A",
          500: "#090909",
          600: "#080808",
          700: "#060606",
          800: "#050505",
          900: "#040404",
        },
        light: {
          50: "#FEFEFE",
          100: "#FCFDFD",
          200: "#FAFBFC",
          300: "#F8FAFB",
          400: "#F7F9FA",
          500: "#F5F7F9",
          600: "#DFE1E3",
          700: "#AEAFB1",
          800: "#878889",
          900: "#676869",
        },
        "dark-bg": "#090909",
        "light-bg": "#F5F7F9",
      },
    },
  },
  classAttributes: ["class", "className", "ngClass", "class:list"],
  experimental: {
    classRegex: [["[cC]lasses\\s*=\\s*{([^}]+)}", '"([^"]*)"']],
  },
  plugins: [],
};
