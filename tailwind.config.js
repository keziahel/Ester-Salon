export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FAF7F2",
          brown: "#4A443F",
          accent: "#C4A484",
          border: "#E8E2D9",
          muted: "#F3EFEC",
          arch: "#F5E6DA",
        },
      },
      fontFamily: {
        sans: ["Montserrat"],
        serif: ["Cormorant Garamond"],
      },
    },
  },
  plugins: [],
};