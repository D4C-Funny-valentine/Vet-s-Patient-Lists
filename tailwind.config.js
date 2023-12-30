/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#54BAB9",
        light_gray: "#444444",
        success: "#1AB45D",
        danger: "#CD211D",
        warning: "#EDC339",
        dust: "#ACB3C0",
        light_blue: "#227aa180",
      },
      fontSize: {
        small: "12px",
        medium: "14px",
        large: "18px",
        extraLarge: "22px",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
