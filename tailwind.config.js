/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsla(228, 100%, 84%, 0.3)",
        "light-blue": "hsla(206, 94%, 87%, 0.2)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        magnolia: "hsla(217, 100%, 97%, 0.8)",
        alabaster: "hsl(231, 100%, 99%)",
      },
      backgroundImage: {
        "sidebar-desktop": "url('./images/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('./images/bg-sidebar-mobile.svg')",
      },
      fontFamily: {
        ubuntu: "'Ubuntu'",
      },
    },
  },
  plugins: [],
};
