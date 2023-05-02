/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-base": "#081C29",
        "second-color": "#0E2C43",
        "btn-color": "#0D83B9",
        "btn2-color": "#00A3E6",
      },
      maxWidth: {
        60: "60rem",
      },
      lineHeight: {
        title: "2",
      },
      width: {
        "btn-home": "30rem",
        "wid-btn": "10rem",
        "wid-btn2": "15rem",
        tam: "800px",
        img: "645px",
      },
      height: {
        "btn-home": "3.5rem",
        "hei-btn": "100%",
      },
      backgroundImage: {
        "img-home": "url('/src/assets/images/Home.png')",
      },
    },
  },
  plugins: [],
};
