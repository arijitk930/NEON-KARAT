/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryBold: ["Druk Wide Bold Bold"],
      },
      lineHeight: {
        tight: "1.2",
      },
    },
  },
  plugins: [],
});
